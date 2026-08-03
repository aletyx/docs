---
title: "Accountable AI in Mortgage: Meeting the 2026 GSE Governance Rules with Decision Management"
description: "Fannie Mae and Freddie Mac now require governed, auditable AI in origination and servicing. Here's how decision management — and Aletyx — turns that mandate into an operational practice."
date: 2026-08-03
author: "Julio Faerman, Aletyx"
---

# Accountable AI in Mortgage: Meeting the 2026 GSE Governance Rules with Decision Management

> **Key takeaways**
>
> - Freddie Mac's AI/ML governance requirements have been **in force since March 3, 2026**; Fannie Mae's take effect **August 6, 2026**. If you sell to or service for either GSE and use AI anywhere in that pipeline, at least one framework applies to you today.
> - The rules cover *all* AI you use — including AI embedded in vendor tools. You can outsource the model; you cannot outsource the accountability.
> - The hardest obligation is **disclosure**: on request, you must show what AI you use, how, and with what safeguards — for real decisions, not just in a policy document.
> - The workable architecture: **probabilistic AI handles the ambiguity; deterministic, versioned decision models own the accountable decision.**
> - Done right, every decision carries five artifacts — policy version, inputs, decision path, approval, tests — and disclosure becomes a query instead of a fire drill.

AI governance in mortgage lending stopped being a best practice this year. It became a *contractual condition* of doing business with the government-sponsored enterprises (GSEs) — Fannie Mae and Freddie Mac.

Two dates made it official:

- **March 3, 2026** — Freddie Mac's [Guide Section 1302.8](https://guide.freddiemac.com/app/guide/section/1302.8), *Use of artificial intelligence and machine learning*, took effect. Its requirements are already in force.
- **August 6, 2026** — Fannie Mae's [Lender Letter LL-2026-04](https://singlefamily.fanniemae.com/media/document/pdf/lender-letter-ll-2026-04), *Governance framework on use of artificial intelligence and machine learning*, becomes effective (120 days from its April 8 publication).

Both frameworks cover any AI or machine learning a seller/servicer uses in connection with originating loans sold to — or servicing loans on behalf of — the GSEs. The scope is not limited to models the lender developed in-house: AI embedded in the third-party tools and vendor platforms a lender relies on — document processing services, pricing engines, servicing software — counts just the same, and *the lender remains the accountable party* for it.

If you sell to or service for either GSE and you use AI anywhere in that pipeline, these rules apply to you now.

## What the GSEs actually require

In short: both GSEs require senior-approved AI policies, continuous risk management, governance of vendor AI, and on-demand disclosure of how AI is used. Read together, the two frameworks converge on four obligations:

**1. Clear, owned, senior-approved policies.** Freddie Mac requires AI/ML policies and procedures approved by senior management — at a minimum the CIO, CTO, CISO, or CRO (or equivalents) — communicated to every employee whose job touches AI, with a named owner who implements, maintains, and reviews them at least annually. Fannie Mae's letter mirrors this: transparent policies covering the development, implementation, use, and maintenance of any AI/ML system, incorporating the characteristics of trustworthy and ethical AI, reviewed annually by an accountable owner.

**2. Continuous risk management.** Both GSEs expect you to map, measure, and manage AI risk — the language of the [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) — on an ongoing basis, calibrated to your risk tolerance. Freddie Mac is explicit about the operational details: assess AI/ML for threats like data poisoning and adversarial inputs; regularly monitor systems for performance, security breaches, and bias; conduct internal and external audits against standards such as NIST 800-53 and ISO 27001; and apply segregation of duties so accountability structures are clear and documented across the organization.

**3. Oversight of third-party AI.** Fannie Mae requires seller/servicers to "manage risks and appropriate governance of subcontractor and vendor use of AI/ML that is no less protective of these requirements." 
**You can outsource the model; you cannot outsource the accountability.**
Freddie Mac adds an indemnification clause — the seller/servicer holds Freddie Mac harmless for liabilities arising from its use of AI/ML, foreseeable or not.

**4. Show your work — on demand.** Both frameworks contain nearly identical language: whenever Fannie Mae or Freddie Mac asks, the seller/servicer must *promptly disclose* the types of AI/ML used, the purpose and manner of use, the safeguards in place to mitigate risk, and any other information the GSE may require.

That fourth obligation is the one that changes daily operations. Policies can be written. Risk frameworks can be documented. But *prompt disclosure* is an operational test: when the request comes, what can you actually produce?

## The gap between having a policy and proving a decision

Most lenders' honest answer today is: a policy PDF, a vendor contract, and a scramble.

That's because the AI actually transforming mortgage work today — document extraction, income analysis, chat-based borrower assistance, automated condition clearing — is largely probabilistic. Generative AI is extraordinary at handling ambiguity: reading a messy paystub, summarizing a hardship letter, extracting figures from a bank statement. But probabilistic systems are, by construction, hard to govern at the level the GSEs now demand. The same input can produce different outputs. The reasoning is not inspectable rule by rule. "Why was this borrower declined?" has no replayable answer.

The way out is not to avoid AI. It's an architectural principle:

> **Probabilistic AI handles the ambiguity. Deterministic decision models own the accountable decision.**

Let the AI software read the document. Let it extract, summarize, and structure. Then hand the structured facts to an explicit, versioned decision model — eligibility rules, income calculation logic, pricing adjustments, loss-mitigation waterfalls — that produces the outcome deterministically. Identical inputs always produce identical outputs. Every rule that fired is recorded. The decision logic is an asset the business owns, reviews, and approves — not a behavior buried in model weights.

This is decision management, and it is precisely the discipline the 2026 frameworks reward.

## The evidence trail: five things every decision should carry

When a GSE reviewer, internal auditor, or regulator asks about an AI-assisted decision, an accountable architecture lets you produce five artifacts for *any individual decision*, on demand:

1. **Policy** — the exact version of the decision model that was in force when the decision was made.
2. **Inputs** — the precise data the decision saw, including what upstream AI extracted.
3. **Decision path** — every rule and branch evaluated, in order, with intermediate results.
4. **Approval** — who reviewed and approved that model version, and when.
5. **Tests** — the test scenarios that version passed before it reached production.

If you can produce those five things for any loan file, "prompt disclosure" stops being a fire drill and becomes a query.

## A concrete scenario: one loan file, fourteen months later

Here is what the difference looks like on a single file.

A self-employed borrower applies in September 2026. An AI document service reads two years of tax returns and bank statements and extracts the raw figures — no human re-keying, minutes instead of hours. Those figures flow into the lender's income-calculation decision model (version 3.2), which computes qualifying monthly income of $8,410, and then into the eligibility model (version 5.1), which approves the loan: the debt-to-income rule evaluates to 41%, under the program's 45% threshold, and every other eligibility rule passes.

Fourteen months later the loan lands in a GSE quality-control sample, and the disclosure request arrives: *what role did AI play in this decision, and what safeguards governed it?*

With an accountable architecture, the answer takes minutes. The lender produces the five artifacts: eligibility model v5.1 as the policy in force; the extracted figures the decision actually saw; the full decision path, rule by rule, including the 41% debt-to-income result; the credit-policy owner's approval of v5.1, dated before the loan was decided; and the regression test suite that version passed before release. The AI's role is fully disclosed — it extracted the inputs — but the decision-maker of record is a versioned, tested, approved model.

Without it, the answer is a policy PDF, a vendor contract, and several weeks of reconstructing what the system probably did.

## How to build accountable AI with Aletyx

Aletyx is an enterprise platform for **Accountable AI**: automation where every outcome is explainable, auditable, and governed. For mortgage lenders facing the 2026 mandates, the pieces map directly onto the GSE requirements.

### Decisions as governed, versioned assets

[Aletyx Decision Control](https://docs.aletyx.ai/decision-control/overview) manages business decisions the way you manage code — with version control, testing, and CI/CD — but designed for the people who actually own mortgage policy:

- **Author decisions visually** in industry-standard DMN notation: eligibility matrices, income calculation logic, pricing grids, servicing waterfalls. Business analysts model the policy directly; developers integrate it through REST APIs. No black boxes, no logic scattered across spreadsheets and code.
- **Governed progression through environments.** Models move Dev → Test → Production with automated governance checks and built-in approval workflows enforcing the four-eyes principle — no one approves their own change. That is Freddie Mac's segregation-of-duties requirement, implemented in the deployment pipeline rather than in a binder.
- **Audit everything.** Who changed what, when, and why — captured automatically for every model, every version, every environment. When the disclosure request arrives, the answer is already recorded.
- **Test naturally.** Analysts and compliance teams validate decision behavior by asking questions in plain English — "What happens if income is $85,000 and credit score is 720?" — and reviewers can probe edge cases before approving a release. Continuous validation is exactly the "regular monitoring and review" posture both GSEs require.

### Pairing AI with deterministic decisions

Aletyx's [Decisions + GenAI](https://docs.aletyx.ai/decisions-genai) approach uses the Model Context Protocol (MCP) to connect AI assistants like Claude with Drools and DMN decision services and process orchestration. The division of labor is deliberate:

- The **AI integration layer** lets the AI do what it's best at — understanding documents, language, and context.
- The **decision layer** executes the accountable logic deterministically, with full traceability of which rules fired and why.
- The **process layer** orchestrates the end-to-end flow — origination steps, servicing workflows, human review escalations — so the whole pipeline, not just a single decision, is governed.

The result is that AI accelerates your mortgage operation *without* becoming the decision-maker of record. The decision-maker of record is a versioned, tested, approved model your business owns — and can defend.

### Covering the vendor question

The governed decision layer is also your answer to third-party AI: route vendor outputs through it, and your policies — not the vendor's — determine the outcome. Because decision models in Aletyx are explicit, standard and exportable, they give you a governance anchor for whatever tools feed them. That is the practical shape of Fannie Mae's "no less protective" vendor requirement: your governance perimeter extends around vendor AI, because vendor outputs are only ever *inputs* to a decision you own.

## AI in mortgage: explainable, repeatable, auditable, governed

The 2026 GSE frameworks are not an obstacle to AI adoption in mortgage — they are a specification for doing it durably. Lenders who treat governance as an evidence-producing architecture, rather than a documentation exercise, will move faster: they can adopt new AI capabilities confidently because the accountable decision layer beneath them doesn't change.

That's the standard we build for:

**Explainable. Repeatable. Auditable. Governed.**

The future of AI isn't just intelligent. It's accountable.

## Frequently asked questions

**When do the new GSE AI governance rules take effect?**
Freddie Mac's requirements ([Guide Section 1302.8](https://guide.freddiemac.com/app/guide/section/1302.8)) have been in force since March 3, 2026. Fannie Mae's ([Lender Letter LL-2026-04](https://singlefamily.fanniemae.com/media/document/pdf/lender-letter-ll-2026-04)) become effective August 6, 2026.

**Do the rules apply if we only use AI through vendor tools?**
Yes. Both frameworks cover AI embedded in third-party software — document processing services, pricing engines, servicing platforms — and the seller/servicer remains the accountable party. Fannie Mae requires vendor governance "no less protective" than your own, and Freddie Mac adds an indemnification obligation on top.

**Do we have to stop using generative AI in origination or servicing?**
No. Neither GSE prohibits any class of AI. What the rules demand is governance: knowing where AI is used, managing its risks, and being able to disclose and defend outcomes. The practical pattern is to let generative AI handle ambiguous inputs — documents, language, context — while a deterministic, versioned decision model makes the accountable decision.

**What does "prompt disclosure" actually require?**
On request, you must promptly tell the GSE what types of AI/ML you use, the purpose and manner of use, and the safeguards in place to mitigate risk — plus any other information they require. The operational test is whether you can produce that evidence for a specific loan file, not just point to a policy document.

**What is decision management, and why does it help here?**
Decision management is the discipline of expressing business decisions — eligibility, income calculation, pricing, loss mitigation — as explicit, versioned, testable models (typically in the DMN standard) rather than burying them in code, spreadsheets, or model weights. Because those models are deterministic, identical inputs always produce identical outputs, and every rule that fired can be replayed — which is exactly the evidence the 2026 frameworks call for.

---

*See how Aletyx Decision Control builds the evidence trail behind every decision: [docs.aletyx.ai](https://docs.aletyx.ai) — or try it yourself in the [Playground](https://playground.aletyx.ai).*
