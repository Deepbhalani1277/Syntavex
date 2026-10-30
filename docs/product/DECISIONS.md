# Decision Log

This log documents key business, architectural, and design decisions made throughout product discovery.

| ID | Date | Category | Decision | Rationale | Alternatives Considered | Status |
|---|---|---|---|---|---|---|
| DEC-001 | 2026-10-29 | Business | Target tech evaluators, recruiters, and startup credit reviewers as primary stakeholders | Serves the dual strategic purpose of resume/portfolio flagship and qualifying for startup cloud credits/ecosystem benefits. | Traditional sales-only landing page | Approved |
| DEC-002 | 2026-10-29 | Business | Launch with 3 core service pillars + Syntavex Labs R&D showcase | Positions Syntavex with high engineering credibility, distinguishing it from low-effort "wrapper" agencies. | Generic software shop, Narrow single-feature page | Approved |
| DEC-003 | 2026-10-29 | Conversion | Implement Direct Email CTA (`contact@syntavex.com`) with 1-click clipboard copy | Clean, reliable, zero third-party dependency, eliminates calendar scheduling friction and privacy blockers. | Third-party calendar embed (Cal.com/Calendly), Form backend | Approved |
| DEC-004 | 2026-10-29 | Infrastructure | Deploy to existing pre-paid Heroku plan ($13/mo, 2 years) | Maximizes existing resource utilization at ₹0 additional cost with direct deployment control. | Cloudflare Pages, Vercel | Approved |
| DEC-005 | 2026-10-29 | Architecture | Zero backend / zero database baseline for launch website | A content and credibility site does not require dynamic state or auth, eliminating attack surface and maintenance overhead. | Custom CMS, Full-stack app with DB | Approved |
| DEC-006 | 2026-10-29 | Brand | Tagline: "Turning complex AI into unfair competitive advantages for startups." | Clear, commercial, startup-focused positioning that emphasizes tangible business upside over pure academic tech. | Engineering-only slogans, Anti-hype minimal slogans | Approved |
| DEC-007 | 2026-10-29 | Architecture | High-impact Single-Page Application (SPA / Modern Landing) | Focuses visitor attention directly down the conversion funnel, minimizes load time and maintenance complexity. | Multi-page site | Approved |
| DEC-008 | 2026-10-29 | Content | No fake social proof; rely on architectural capability breakdowns and Syntavex Labs teaser | Maintains strict credibility and authenticity as a launching AI engineering firm. | Fake testimonials / generic placeholder logos | Approved |
| DEC-009 | 2026-10-29 | Frontend | Pure Semantic HTML5 + Modern Vanilla CSS + Modular Vanilla JavaScript | Ensures 100/100 Lighthouse performance, sub-100ms load times, zero build tool complexity, and zero npm vulnerability churn. | React / Vite, Next.js | Approved |
| DEC-010 | 2026-10-29 | Privacy | Zero-tracker baseline / lightweight privacy-friendly analytics | Complies with GDPR/CCPA without annoying cookie consent banners or tracking scripts. | Google Analytics with cookie banner | Approved |
| DEC-011 | 2026-10-29 | Governance | Full Product Discovery Specification formally approved by founder | Authorizes transition from discovery to Phase 1 of the implementation plan (Design System & Frontend Design Exploration). | Revision loop | Approved |
