# Syntavex — Measurable Acceptance Criteria

This document defines explicit, testable criteria for every functional requirement and quality attribute before the website is considered launch-ready.

---

## 1. Feature-Level Acceptance Criteria

### AC-001: Header & Sticky Navigation
* [ ] **AC-001.1**: The navbar remains visible and fixed at the top of the viewport upon scroll.
* [ ] **AC-001.2**: Clicking any nav link (`Capabilities`, `Architecture`, `Stack`, `Process`, `Labs`, `Contact`) initiates smooth scrolling to the exact corresponding section ID.
* [ ] **AC-001.3**: On viewport widths $< 768\text{px}$, desktop links collapse into an accessible mobile menu toggleable via keyboard and touch.
* [ ] **AC-001.4**: All interactive navigation elements have visible `:focus-visible` styling when navigated via keyboard.

### AC-002: Hero Section & Positioning
* [ ] **AC-002.1**: The main `<h1>` headline displays: *"Turning Complex AI into Unfair Advantages for Startups"*.
* [ ] **AC-002.2**: The availability status badge renders clearly with pulsing/ambient status indicator.
* [ ] **AC-002.3**: Clicking the primary "Initiate Project" button smoothly scrolls directly to `#contact`.
* [ ] **AC-002.4**: Clicking the secondary "Explore Architecture" button smoothly scrolls directly to `#architecture`.

### AC-003: Core Capabilities Matrix
* [ ] **AC-003.1**: Renders exactly 3 distinct capability cards:
  1. *Autonomous AI Agents & Workflows*
  2. *Intelligent Automation & Pipeline Engineering*
  3. *Custom Software & AI Infrastructure*
* [ ] **AC-003.2**: Each card contains title, descriptive overview, and technical capability tags.
* [ ] **AC-003.3**: Cards respond smoothly to hover/focus states with visual depth enhancement without layout shifting.

### AC-004: Architecture & Engineering Standards
* [ ] **AC-004.1**: Outlines all 4 engineering pillars: Deterministic State, Continuous Evaluation, Zero-Leakage Security, and Ultra-Low Latency.
* [ ] **AC-004.2**: Copy is completely free of generic placeholder text, lorem ipsum, or artificial claims.

### AC-005: Tech Stack Showcase
* [ ] **AC-005.1**: Displays curated badges for Python, LangGraph, PyTorch, FastAPIs, Vector Stores, Next.js/React, Docker, and Heroku.
* [ ] **AC-005.2**: Grid wraps cleanly without overflow or text clipping across 320px, 375px, 768px, and 1440px viewports.

### AC-006: 3-Step Delivery Framework
* [ ] **AC-006.1**: Sequentially displays: (1) Architecture Blueprint $\rightarrow$ (2) Rapid Build & Iteration $\rightarrow$ (3) Production Handoff & Hardening.
* [ ] **AC-006.2**: Clear numbering and visual connection between steps on desktop.

### AC-007: Syntavex Labs Teaser
* [ ] **AC-007.1**: Highlights internal R&D with distinct "In Active Development" status badge.
* [ ] **AC-007.2**: Mentions internal autonomous engineering tools (`Project Nexus` and `SynthaRAG`).

### AC-008: Conversion & Inquiries Hub (1-Click Clipboard Copy)
* [ ] **AC-008.1**: Clearly displays `contact@syntavex.com`.
* [ ] **AC-008.2**: Clicking the "Copy Email" button copies `contact@syntavex.com` to the system clipboard without refreshing or redirecting the page.
* [ ] **AC-008.3**: Upon copy, button immediately transitions to a visible confirmation state (*"Copied to clipboard!"*) for 2.5 seconds before resetting.
* [ ] **AC-008.4**: Clicking "Send Direct Email" triggers `mailto:contact@syntavex.com?subject=Syntavex%20Engineering%20Inquiry`.

### AC-009: Footer & Operational Status
* [ ] **AC-009.1**: Renders copyright: `© 2026 Syntavex Technologies. All rights reserved.`
* [ ] **AC-009.2**: Displays operational indicator and back-to-top anchor.

---

## 2. Non-Functional & Quality Acceptance Criteria

### AC-010: Performance & Core Web Vitals
* [ ] **AC-010.1**: Google Lighthouse Performance score $\ge 95$.
* [ ] **AC-010.2**: Google Lighthouse Accessibility score $\ge 95$.
* [ ] **AC-010.3**: Google Lighthouse Best Practices score $= 100$.
* [ ] **AC-010.4**: Google Lighthouse SEO score $= 100$.
* [ ] **AC-010.5**: First Contentful Paint (FCP) $< 1.0\text{s}$ on standard mobile throttling.

### AC-011: Cross-Browser & Device Responsiveness
* [ ] **AC-011.1**: Zero horizontal scrollbars or element clipping on viewports from 320px to 2560px width.
* [ ] **AC-011.2**: Fully verified on Chromium, Firefox, and WebKit rendering engines.

### AC-012: Security & Header Verification
* [ ] **AC-012.1**: Server serves responses with valid CSP, X-Frame-Options: DENY, and X-Content-Type-Options: nosniff headers.
* [ ] **AC-012.2**: Zero external third-party tracking cookies or scripts loaded.
* [ ] **AC-012.3**: Deployable to Heroku via Procfile with dynamic `$PORT` binding.
