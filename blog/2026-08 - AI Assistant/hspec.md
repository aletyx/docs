# Loan Pre-Qualification Model – Plain English Explanation

## What Does This Model Do?

This is a **loan approval checker**. When someone applies for a loan, the model asks three questions:

1. **Is their credit score good enough?**
2. **Can they afford the monthly loan payment?**
3. **Do they have too much other debt already?**

If all three answers are "yes," they get approved. If any answer is "no," they get rejected with a specific reason why.

---

## The Three Big Checks

### Check #1: Credit Score Quality

**What it measures:** How trustworthy is the borrower based on their past financial behavior?

**How it works:**
- The lender looks at the applicant's FICO credit score (a number between 300 and 850)
- Scores are grouped into 5 categories:
  - **675 or higher** = Excellent (very trustworthy)
  - **630 to 674** = Good (trustworthy)
  - **585 to 629** = Fair (acceptable)
  - **540 to 584** = Poor (risky)
  - **Below 540** = Bad (very risky)

**Pass/Fail:** Need at least a "Fair" rating (585 or higher). If the score is "Poor" or "Bad," the applicant is automatically rejected.

---

### Check #2: Can They Afford the Monthly Payment?

**What it measures:** Will the new loan payment eat up too much of their monthly income?

**How it works:**
1. Calculate what the monthly loan payment will be using a standard mortgage formula
2. Add up: monthly payment + property taxes + homeowner insurance
3. Divide this total by their gross monthly income
4. Compare to the lender's limit: **28%**

**Example:**
- Monthly loan payment: $1,000
- Monthly taxes: $300
- Monthly insurance: $100
- **Total: $1,400**
- Monthly income: $5,000
- **Ratio: $1,400 ÷ $5,000 = 28%** ✓ Passes (right at the limit)

**Pass/Fail:** The ratio must be 28% or less. If it exceeds 28%, they're rejected for "mortgage payment too high."

---

### Check #3: Do They Already Have Too Much Debt?

**What it measures:** Between all their existing debts and expenses, how much of their income is already spoken for?

**How it works:**
1. Add up all their monthly debt obligations:
   - Existing loan/credit card payments
   - Living expenses (utilities, groceries, etc.)
2. Divide by their gross monthly income
3. Compare to the lender's limit: **42%**

**Example:**
- Monthly loan payments: $600
- Monthly living expenses: $800
- **Total: $1,400**
- Monthly income: $3,500
- **Ratio: $1,400 ÷ $3,500 = 40%** ✓ Passes (under 42%)

**Pass/Fail:** The ratio must be 42% or less. If it exceeds 42%, they're rejected for "too much existing debt."

---

## The Final Decision

### Approval Happens When ALL Three Conditions Are Met:

✅ Credit score is Fair or better (FICO ≥ 585)  
✅ Monthly payment ratio is 28% or less  
✅ Total debt ratio is 42% or less  

### Rejection Happens If Any Condition Fails:

The model rejects and explains **specifically why**:

| Situation | Rejection Reason |
|---|---|
| Credit score is Poor or Bad | "Your credit score is too low" |
| Monthly payment ratio > 28% | "Your new loan payment would be too high relative to your income" |
| Total debt ratio > 42% | "You already have too much debt" |
| Both ratios fail | "You have too much debt AND the new payment is too high" |

---

## Real-World Example: Maria's Loan Application

**Maria's Information:**
- FICO score: 625 (Fair)
- Monthly income: $4,000
- Existing monthly debts: $700
- Living expenses: $600
- Wants to borrow: $200,000 at 4.5% interest for 30 years (360 months)
- Property taxes: $250/month
- Homeowner insurance: $100/month

**Check #1: Credit Score**
- FICO 625 = Fair ✓ Passes (≥ 585)

**Check #2: Monthly Payment Ability**
- New monthly payment: ~$1,013
- Add taxes & insurance: $1,013 + $250 + $100 = $1,363
- Ratio: $1,363 ÷ $4,000 = 34% ✗ **FAILS** (exceeds 28%)

**Check #3: Total Debt Capacity**
- Existing debts: $700
- Living expenses: $600
- Total: $1,300
- Ratio: $1,300 ÷ $4,000 = 32.5% ✓ Passes (≤ 42%)

**Result:** Maria is **REJECTED**  
**Reason:** "Your mortgage payment would be too high relative to your income"

Even though her credit is acceptable and she could handle the total debt load, the new payment alone would push her over the 28% threshold.

---

## Why These Specific Percentages?

**28% for housing payment (PITI):**
- Industry standard used by most lenders
- Limits housing costs to less than one-third of income
- Leaves room for other expenses and savings

**42% for total debt (DTI):**
- More generous than the housing limit
- Allows for existing obligations while protecting against over-leverage
- Standard in the lending industry

---

## Summary in One Sentence

> **The model checks if applicants have good enough credit history, and whether their income is sufficient to cover both the new loan payment AND all their existing debts.**