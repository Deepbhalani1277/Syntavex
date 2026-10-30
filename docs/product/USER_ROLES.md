# Syntavex — User Roles & Personas

This document outlines the primary actors interacting with the Syntavex website, their core motivations, critical questions, and interaction boundaries.

---

## 1. Persona Matrix

| Role | Target Persona | Primary Goal | Key Friction / Skepticism | Desired Action |
|---|---|---|---|---|
| **Startup Founder / CEO** | Non-technical or semi-technical founder with product vision | Find an engineering partner to build their AI prototype or agent system fast and reliably. | *"Is this just another generic agency using basic OpenAI API wrappers that break under real use?"* | Books a 30-min discovery call or emails project specifications. |
| **Technical Lead / CTO** | Technical Co-founder, VP of Engineering, or Senior Architect | Evaluate technical rigor, architecture capabilities, and production readiness of Syntavex. | *"Do they understand latency, RAG evaluations, local/open models, fine-tuning, security, and tool orchestration?"* | Reviews tech stack & capabilities, verifies engineering approach, validates partner fit. |
| **Syntavex Solo Founder (Owner)** | Administrator / Operator | Convert traffic into qualified leads without managing servers, databases, or manual administrative overhead. | High operational burden, manual scheduling conflicts, spam submissions. | Receives confirmed calendar invites or direct emails with contextual client inquiries. |

---

## 2. Detailed Role Profiles

### Role 1: Startup Founder / CEO
* **Context**: Often operating under tight runway or investor deadlines. Needs rapid velocity to prove PMF (Product-Market Fit) or raise a funding round.
* **Core Requirements from Website**:
  * Clear, non-jargon explanation of what Syntavex can deliver.
  * Clear engagement framework (how we work, timelines, deliverables).
  * Direct ability to book a discovery session immediately.
* **Permissions / Boundaries**: Public read-only access, outbound booking interaction, mailto/clipboard interaction.

### Role 2: Technical Lead / CTO
* **Context**: Responsible for codebase longevity and data security. Highly sensitive to vendor hype and architectural shortcuts.
* **Core Requirements from Website**:
  * Evidence of engineering depth: modern stack (LangGraph, LlamaIndex, PyTorch, Next.js, FastAPI, vector stores), evaluation metrics, and security/privacy awareness.
  * Transparent articulation of architecture (RAG, agent workflows, autonomous tool-calling).
* **Permissions / Boundaries**: Public read-only access, capability inspection.

### Role 3: Syntavex Solo Founder
* **Context**: Operating as solo engineer and business development lead.
* **Core Requirements from Website**:
  * Zero-maintenance deployment (set-it-and-forget-it).
  * Direct calendar sync (Cal.com / Calendly) with automated notifications.
  * Zero risk of server downtime, patching, or database corruption for the marketing site.
