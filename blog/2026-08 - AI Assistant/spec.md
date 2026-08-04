# Loan Pre-Qualification Decision Model – Detailed Text Specification

## 1. Model Overview

**Model Name:** Loan Pre-Qualification  
**DMN Version:** 1.2  
**Namespace:** https://kie.apache.org/dmn/_857FE424-BEDA-4772-AB8E-2F4CDDB864AB  
**Expression Language:** FEEL

**Purpose:** Evaluate whether a loan applicant qualifies for a loan product based on credit score rating, debt-to-income ratio (Back End Ratio), and housing payment-to-income ratio (Front End Ratio).

---

## 2. Data Types (Input & Output Structures)

### 2.1 Marital_Status
- **Type:** Enumerated String
- **Allowed Values:** "M" (Married), "D" (Divorced), "S" (Single)

### 2.2 Employment_Status
- **Type:** Enumerated String
- **Allowed Values:** "Unemployed", "Employed", "Self-employed", "Student"

### 2.3 Applicant_Data
- **Type:** Complex Structure
- **Fields:**
  - `Age` (number): Applicant's age
  - `Marital Status` (Marital_Status): Marital status enumeration
  - `Employment Status` (Employment_Status): Employment status enumeration
  - `Existing Customer` (boolean): Whether applicant is an existing customer
  - `Monthly` (Complex Object): Contains:
    - `Income` (number): Gross monthly income
    - `Repayments` (number): Monthly debt repayment obligations
    - `Expenses` (number): Monthly living expenses
    - `Tax` (number): Monthly tax obligations
    - `Insurance` (number): Monthly insurance (homeowners/property)

### 2.4 Credit_Score
- **Type:** Complex Structure
- **Fields:**
  - `FICO` (number): FICO credit score (range: 300–850)

### 2.5 Product_Type
- **Type:** Enumerated String
- **Allowed Values:** "Standard Loan", "Special Loan"

### 2.6 Requested_Product
- **Type:** Complex Structure
- **Fields:**
  - `Type` (Product_Type): Loan product type
  - `Rate` (number): Annual interest rate (percentage)
  - `Term` (number): Loan term in months
  - `Amount` (number): Requested loan amount in dollars

### 2.7 Credit_Score_Rating
- **Type:** Enumerated String
- **Allowed Values:** "Poor", "Bad", "Fair", "Good", "Excellent"

### 2.8 Front_End_Ratio
- **Type:** Enumerated String
- **Allowed Values:** "Sufficient", "Insufficient"

### 2.9 Back_End_Ratio
- **Type:** Enumerated String
- **Allowed Values:** "Sufficient", "Insufficient"

### 2.10 Qualification
- **Type:** Enumerated String
- **Allowed Values:** "Qualified", "Not Qualified"

### 2.11 Loan_Qualification
- **Type:** Complex Structure
- **Fields:**
  - `Qualification` (string): "Qualified" or "Not Qualified"
  - `Reason` (string): Explanation for qualification decision

---

## 3. Business Knowledge Models (BKMs)

### 3.1 Lender Acceptable DTI
- **Returns:** number
- **Logic (FEEL):** Returns a fixed constant of **0.42** (42%)
- **Purpose:** Defines the maximum acceptable debt-to-income ratio threshold
- **Business Rule:** Any applicant whose DTI exceeds 42% will fail the Back End Ratio evaluation

### 3.2 Lender Acceptable PITI
- **Returns:** number
- **Logic (FEEL):** Returns a fixed constant of **0.28** (28%)
- **Purpose:** Defines the maximum acceptable PITI (Principal + Tax + Insurance to Income) ratio threshold
- **Business Rule:** Any applicant whose PITI exceeds 28% will fail the Front End Ratio evaluation

### 3.3 DTI (Debt-to-Income Calculation)
- **Parameters:**
  - `d` (number): Total monthly debt obligations (repayments + expenses)
  - `i` (number): Monthly income
- **Returns:** number (decimal ratio, e.g., 0.35 = 35%)
- **Logic (FEEL):** `d / i`
- **Purpose:** Calculates the ratio of debt obligations to income

### 3.4 PITI (Housing Payment Ratio Calculation)
- **Parameters:**
  - `pmt` (number): Monthly mortgage/loan payment (principal + interest)
  - `tax` (number): Monthly property tax
  - `insurance` (number): Monthly insurance payment
  - `income` (number): Monthly gross income
- **Returns:** number (decimal ratio, e.g., 0.22 = 22%)
- **Logic (FEEL):** `(pmt + tax + insurance) / income`
- **Purpose:** Calculates the ratio of housing-related payments to income

---

## 4. Input Nodes

### 4.1 Credit Score
- **Type:** Credit_Score
- **Purpose:** Receives the applicant's FICO credit score
- **Required for:** Credit Score Rating decision

### 4.2 Applicant Data
- **Type:** Applicant_Data
- **Purpose:** Receives comprehensive applicant financial and personal information
- **Required for:** Front End Ratio and Back End Ratio decisions

### 4.3 Requested Product
- **Type:** Requested_Product
- **Purpose:** Receives details of the requested loan product (amount, rate, term)
- **Required for:** Front End Ratio calculation (to compute monthly payment)

---

## 5. Decision Nodes

### 5.1 Credit Score Rating

**Input:** Credit Score (FICO)  
**Output:** Credit_Score_Rating (enumerated string)  
**Type:** Decision Table (Unique hit policy)  
**Logic:**

| Condition | Output |
|---|---|
| FICO ≥ 675 | "Excellent" |
| FICO ∈ [630, 675) | "Good" |
| FICO ∈ [585, 630) | "Fair" |
| FICO ∈ [540, 585) | "Poor" |
| FICO < 540 | "Bad" |

**Purpose:** Categorizes the applicant's FICO score into a rating level for use in final qualification logic.

---

### 5.2 Front End Ratio

**Inputs:**
- Applicant Data
- Requested Product

**Output:** Front_End_Ratio ("Sufficient" or "Insufficient")  
**Type:** Decision Logic with Context and Expressions  
**Process:**

1. **Calculate Monthly Payment (PMT):**
   ```
   PMT = (Requested Product.Amount * ((Requested Product.Rate / 100) / 12)) 
         / (1 - (1 / (1 + (Requested Product.Rate / 100) / 12)^(-Requested Product.Term))
   ```
   Formula: Standard amortization payment calculation

2. **Calculate Client PITI:**
   ```
   Client PITI = (PMT + Applicant Data.Monthly.Tax + Applicant Data.Monthly.Insurance) 
                 / Applicant Data.Monthly.Income
   ```
   Invoke BKM `PITI` with parameters:
   - `pmt` = calculated monthly payment
   - `tax` = Applicant Data.Monthly.Tax
   - `insurance` = Applicant Data.Monthly.Insurance
   - `income` = Applicant Data.Monthly.Income

3. **Compare to Threshold:**
   ```
   If Client PITI ≤ Lender Acceptable PITI() (0.28)
     Then output "Sufficient"
     Else output "Insufficient"
   ```

**Purpose:** Evaluates whether the applicant's housing payment burden (as a percentage of gross income) is acceptable.

---

### 5.3 Back End Ratio

**Input:** Applicant Data  
**Output:** Back_End_Ratio ("Sufficient" or "Insufficient")  
**Type:** Decision Logic with Context and Expressions  
**Process:**

1. **Calculate Client DTI:**
   ```
   Client DTI = (Applicant Data.Monthly.Repayments + Applicant Data.Monthly.Expenses) 
                / Applicant Data.Monthly.Income
   ```
   Invoke BKM `DTI` with parameters:
   - `d` = Applicant Data.Monthly.Repayments + Applicant Data.Monthly.Expenses
   - `i` = Applicant Data.Monthly.Income

2. **Compare to Threshold:**
   ```
   If Client DTI ≤ Lender Acceptable DTI() (0.42)
     Then output "Sufficient"
     Else output "Insufficient"
   ```

**Purpose:** Evaluates whether the applicant's total debt obligations (as a percentage of gross income) are acceptable.

---

### 5.4 Loan Pre-Qualification (Final Decision)

**Inputs:**
- Credit Score Rating
- Back End Ratio
- Front End Ratio

**Output:** Loan_Qualification  
- `Qualification`: "Qualified" or "Not Qualified"
- `Reason`: Detailed explanation string

**Type:** Decision Table (First hit policy)  
**Logic:** Combination decision table with 5 rules evaluated in order:

| Rule # | Credit Score Rating | Back End Ratio | Front End Ratio | Qualification | Reason |
|---|---|---|---|---|---|
| 1 | "Poor", "Bad" | — (any) | — (any) | "Not Qualified" | "Credit Score too low." |
| 2 | — (not Poor/Bad) | "Insufficient" | "Sufficient" | "Not Qualified" | "Debt to income ratio is too high." |
| 3 | — (not Poor/Bad) | "Sufficient" | "Insufficient" | "Not Qualified" | "Mortgage payment to income ratio is too high." |
| 4 | — (not Poor/Bad) | "Insufficient" | "Insufficient" | "Not Qualified" | "Debt to income ratio is too high AND mortgage payment to income ratio is too high." |
| 5 | "Fair", "Good", "Excellent" | "Sufficient" | "Sufficient" | "Qualified" | "The borrower has been successfully prequalified for the requested loan." |

**Evaluation Order:** Rules are evaluated top-to-bottom; first matching rule's output is returned.

**Qualification Criteria (Rule 5 – Qualified):**
- Credit score rating must be Fair, Good, or Excellent (FICO ≥ 585)
- Back End Ratio must be Sufficient (DTI ≤ 42%)
- Front End Ratio must be Sufficient (PITI ≤ 28%)

**Disqualification Reasons (Rules 1–4):**
- If credit score is Poor or Bad → automatic disqualification
- If DTI exceeds 42% (and credit is acceptable) → disqualification for high debt obligations
- If PITI exceeds 28% (and credit is acceptable) → disqualification for high housing payment burden
- If both DTI and PITI are excessive → combined disqualification reason

**Purpose:** Final qualification decision combining all three evaluation dimensions (credit, debt burden, housing affordability).

---

## 6. Decision Requirements Diagram (DRD) Dependencies

**Dependency Graph:**

```
Credit Score
     ↓
Credit Score Rating ──┐
                      ├─→ Loan Pre-Qualification
Applicant Data ──┐    │
                 ├─→ Back End Ratio ──┤
Applicant Data ──┤
Requested Product ├─→ Front End Ratio ─┘

BKMs Used:
- Lender Acceptable DTI (by Back End Ratio)
- Lender Acceptable PITI (by Front End Ratio)
- DTI (by Back End Ratio)
- PITI (by Front End Ratio)
```

---

## 7. Business Rules Summary

### Qualification Requirements (All Must Be True)
1. Credit score rating is Fair, Good, or Excellent (FICO ≥ 585)
2. Debt-to-income ratio does not exceed 42%
3. Housing payment-to-income ratio (PITI) does not exceed 28%

### Disqualification Priorities
- Credit score failures override all other factors (Rule 1)
- DTI failures are checked before PITI failures (Rule 2 before Rule 3)
- Both ratios can fail simultaneously (Rule 4)

### Key Thresholds
- **Credit Score Poor/Bad:** FICO < 585
- **Credit Score Fair:** FICO ∈ [585, 630)
- **Credit Score Good:** FICO ∈ [630, 675)
- **Credit Score Excellent:** FICO ≥ 675
- **Maximum DTI:** 42% (0.42)
- **Maximum PITI:** 28% (0.28)

---

## 8. Calculation Formulas

### Monthly Loan Payment (Principal + Interest)
```
PMT = (Principal × (MonthlyRate)) / (1 - (1 + MonthlyRate)^(-Term))
where MonthlyRate = AnnualRate / 100 / 12
```

### Debt-to-Income Ratio
```
DTI = (Monthly Repayments + Monthly Expenses) / Monthly Gross Income
```

### Housing Payment-to-Income Ratio (PITI)
```
PITI = (Monthly Payment + Monthly Tax + Monthly Insurance) / Monthly Gross Income
```

---

## 9. Error Handling & Constraints

- All numeric inputs must be valid (non-negative where applicable)
- FICO score must be within [300, 850] range
- Loan rate and term must be positive values
- Monthly income must be greater than zero (to avoid division errors)
- All enumerated inputs must match allowed values exactly

---

This specification provides sufficient detail to reconstruct the entire decision model in any DMN editor without access to the visual diagram.