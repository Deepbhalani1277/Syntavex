# Syntavex — User Flows & Journeys

This document models the visitor pathways on the Syntavex website, detailing how visitors consume content, evaluate engineering credibility, and execute contact actions.

---

## 1. Primary Evaluation & Inbound Contact Flow

```mermaid
flowchart TD
    A[Visitor Lands on Hero Section] --> B{Reads Value Proposition & Tagline}
    B -->|Immediate Interest| C[Click 'Get in Touch' or 'Contact']
    B -->|Evaluation / Review| D[Scroll to Capabilities Matrix]
    D --> E[Inspect AI Agents, Automation, Custom Engineering]
    E --> F[Review Architecture Standards & Tech Stack]
    F --> G[Review 3-Step Execution Model & Labs Teaser]
    G --> C
    C --> H[Smooth Scroll to Contact & Inquiries Hub]
    H --> I{Choose Contact Action}
    I -->|Action 1: Click Email Link| J[Launches Native Mail Client to contact@syntavex.com]
    I -->|Action 2: Click Copy Button| K[Address copied to clipboard + Toast confirmation 'Copied!']
```

---

## 2. Reviewer Journey: Startup Benefit Evaluator / Recruiter

```mermaid
flowchart TD
    A[Evaluator arrives via Link / Application] --> B[Scans Hero: Verifies Entity Name & Purpose]
    B --> C[Checks Capabilities: Verifies Legit AI Engineering Offerings]
    C --> D[Checks Tech Stack & Standards: Confirms Real Technical Foundation]
    D --> E[Checks Syntavex Labs & Process: Validates R&D Roadmap & Execution Rigor]
    E --> F[Checks Footer & Contact: Confirms Official Domain Channel contact@syntavex.com]
    F --> G[Passes Verification / Approves Application]
```

---

## 3. Micro-Interaction & Error Handling Flows

### 1-Click Clipboard Copy Flow
1. User clicks the **"Copy Email"** button next to `contact@syntavex.com`.
2. Script invokes modern `navigator.clipboard.writeText('contact@syntavex.com')`.
3. If modern clipboard API is available:
   - Button UI dynamically transitions to a checkmark state with text *"Copied to clipboard!"*.
   - Reverts back to initial state after 2.5 seconds.
4. Fallback if clipboard API is restricted by browser security:
   - Script gracefully falls back to `document.execCommand('copy')` or highlights the text with prompt to copy manually.
   - Zero console errors or broken states.

### Responsive Viewport Handling
* Seamless scaling across mobile (320px–480px), tablet (768px–1024px), and desktop/wide displays (1200px+).
* Mobile navigation menu with clean toggle drawer or sticky quick-action bar.
