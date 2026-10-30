# Syntavex — Security, Privacy & Accessibility Requirements

This document specifies the security controls, privacy policies, and accessibility standards enforced across the Syntavex web presence.

---

## 1. Security Engineering

### Attack Surface Minimization
* **Zero Database / Zero Dynamic State**: Eliminates SQL injection (SQLi), ORM exploits, connection exhaustion, and unauthorized data extraction risks entirely.
* **Zero Authentication / User Accounts**: Eliminates session hijacking, credential stuffing, brute force attacks, and token leakage risks.
* **Zero External Dependencies**: Standard Node.js built-in `http` static serving avoids third-party npm package supply chain vulnerabilities.

### HTTP Security Headers
The server runtime must inject the following headers on every response:

```http
Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; script-src 'self'; frame-ancestors 'none';
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
```

### Transport Layer Security
* Force HTTPS on all incoming requests (automatically terminated and managed via Heroku SSL).
* Automatic redirect from HTTP to HTTPS.

---

## 2. Privacy & Compliance

### Zero-Tracker Baseline
* **No Cookies**: The website does not set any first-party or third-party cookies.
* **No Invasive Tracking**: No Facebook Pixel, Google Analytics tracking cookies, or cross-site fingerprinting scripts.
* **GDPR & CCPA Exemption**: Because no personal data is collected or tracked via cookies, no intrusive cookie consent banner is needed or displayed, preserving clean UX.

### Inbound Inquiries
* Direct email communication initiated via `contact@syntavex.com` takes place entirely within the user's native email client under standard SMTP/email privacy protocols.

---

## 3. Web Accessibility Standards (WCAG 2.2 Level AA)

### Visual & Color Accessibility
* **Contrast Ratios**: All text and interactive controls must exceed a minimum contrast ratio of `4.5:1` against their respective backgrounds (and `3:1` for large text $\ge 24\text{px}$).
* **Focus Indicators**: Clear, high-visibility keyboard focus rings (`:focus-visible`) must be styled for all interactive links and buttons.

### Assistive Technology Support
* **Semantic Landmarks**: Semantic elements used exclusively for document layout (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
* **Heading Hierarchy**: Exactly one `<h1>` element, followed by logical `<h2>` and `<h3>` hierarchy.
* **Screen Reader Labels**: All icon-only buttons or interactive elements must provide accessible descriptions via `aria-label` or hidden text.
* **Keyboard Navigability**: The entire page must be 100% operable via keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`).
