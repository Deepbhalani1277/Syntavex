# Syntavex

> **Production-Grade AI Systems & Engineering**  
> *Turning complex AI into unfair competitive advantages for startups.*

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Proprietary-blue?style=flat-square)](LICENSE)
[![Performance](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=flat-square)](https://pagespeed.web.dev/)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0_Runtime-blueviolet?style=flat-square)](package.json)

---

## ⚡ Overview

**Syntavex** is an AI systems and software engineering studio specializing in autonomous agent architectures, intelligent workflow pipelines, and resilient production infrastructure for high-velocity startups.

This repository hosts the official Syntavex web platform—engineered with zero runtime dependencies, a lightweight secure static HTTP server, and a high-performance modern frontend with ambient canvas visuals.

---

## 🛠️ Core Capabilities

- **Autonomous AI Agents & Workflows**: Multi-agent orchestration, tool calling, self-correcting RAG pipelines, and deterministic state machines.
- **Intelligent Business Automation**: Automated pipeline engineering, API integrations, and document intelligence engines.
- **Custom Software & AI Infrastructure**: High-throughput inference serving, vector search architecture, and end-to-end observability.
- **Syntavex Labs**: Forward-looking R&D exploring autonomous agents, proprietary tooling, and next-generation AI platforms.

---

## 🏗️ Architecture & Tech Stack

- **Frontend**: Modern Semantic HTML5, CSS3 with custom design tokens, and Vanilla JavaScript (ES6+).
- **Visuals**: Interactive WebGL/Canvas neural network background with interactive mouse nodes and ambient mesh glow.
- **Server**: Zero-dependency Node.js HTTP server ([`server.js`](server.js)) with built-in path-traversal protection, Content Security Policy (CSP), strict MIME type mappings, and HTTP security headers.
- **Performance**: Instant cold start, zero build step required, 100/100 Lighthouse performance metrics.

---

## 📂 Project Structure

```text
Syntavex/
├── docs/                      # Architectural specifications & product discovery
│   ├── deployment/            # Detailed hosting & cloud deployment guides
│   │   └── HEROKU_DEPLOYMENT.md
│   └── product/               # Product briefs, specifications, and architecture
├── public/                    # Production static web assets
│   ├── assets/                # Brand identity, icons, and SVGs
│   ├── css/
│   │   └── main.css           # Modern design system & token definitions
│   ├── js/
│   │   └── app.js             # Canvas visualizer & interactive UI handlers
│   └── index.html             # High-conversion landing page
├── .gitignore                 # Strict environment, OS, and secret exclusion rules
├── package.json               # Project metadata and npm scripts
├── Procfile                   # Process declaration for Heroku / container dynos
├── README.md                  # Project documentation
└── server.js                  # Production-ready zero-dependency Node.js server
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0.0 or higher)
- [Git](https://git-scm.com/)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Deepbhalani1277/Syntavex.git
   cd Syntavex
   ```

2. **Start the local server:**
   ```bash
   npm start
   ```

3. **Open in your browser:**
   ```text
   http://localhost:3000
   ```

---

## 🌐 Deployment Options

### 1. Vercel (Edge CDN — Recommended)
1. Import this repository into [Vercel](https://vercel.com/new).
2. Set the **Output Directory** to `public`.
3. Click **Deploy**.

### 2. Heroku
The repository includes a ready-to-use [`Procfile`](Procfile) (`web: node server.js`).
```bash
heroku create syntavex-web
git push heroku main
heroku open
```
*See [HEROKU_DEPLOYMENT.md](docs/deployment/HEROKU_DEPLOYMENT.md) for full instructions.*

### 3. Render / Railway
Deploy as a Node.js web service pointing to:
- **Build Command**: *(leave blank)*
- **Start Command**: `node server.js`

---

## 🔒 Security & Standards

- **CSP Protection**: Strict Content-Security-Policy enabled by default on all HTTP responses.
- **Clickjacking & MIME Protection**: `X-Frame-Options: DENY` and `X-Content-Type-Options: nosniff`.
- **Zero Vulnerabilities**: No external third-party runtime npm dependencies to maintain or patch.

---

## 📬 Contact & Inquiries

- **Website**: [Syntavex](https://syntavex.tech)
- **Email**: [contact@syntavex.tech](mailto:contact@syntavex.tech)
- **GitHub**: [@Deepbhalani1277](https://github.com/Deepbhalani1277)

---

&copy; 2026 Syntavex Technologies. All rights reserved.

