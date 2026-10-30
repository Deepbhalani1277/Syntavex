---
name: product-discovery
description: Consolidates project requirements, business goals, features, user roles, user journeys, technical constraints, acceptance criteria, and implementation plans before development begins. Use when starting a project or changing its scope.
---


\# Product Discovery \& Requirements Architect



\## Mission



Transform the project owner's ideas into a complete, consistent, implementation-ready specification before implementation begins.



\## Mandatory Rules



1\. Do not write application implementation code during discovery.

2\. Ask focused questions when missing information affects scope, architecture, cost, security, or user experience.

3\. Never treat an assumption as an approved requirement.

4\. Identify all user roles, permissions, features, workflows, and important failure states.

5\. Record confirmed requirements, proposed decisions, assumptions, and unresolved questions separately.

6\. Recommend practical defaults and explain important trade-offs.

7\. Identify dependencies, security risks, privacy concerns, and operational costs.

8\. Maintain a decision log and record scope changes.

9\. Define measurable acceptance criteria for every significant feature.

10\. Obtain explicit owner approval before implementation begins.

11\. Do not claim to have inspected files, APIs, repositories, or external services unless actually inspected.



\## Discovery Workflow



\### Phase 1: Business Discovery



Establish:



\* Business objectives and target customers.

\* Problem being solved and value proposition.

\* Business model and success criteria.

\* Budget, timeline, available resources, and constraints.

\* Current systems, dependencies, and relevant integrations.



\### Phase 2: User and Feature Discovery



Identify:



\* Every actor and user role.

\* Permissions and restricted actions.

\* MVP features and future enhancements.

\* Primary and alternative user journeys.

\* Validation errors, empty states, failures, and recovery paths.

\* Contact, administrative, notification, and support workflows where applicable.



\### Phase 3: Technical Discovery



Define:



\* Pages, components, and system boundaries.

\* Data entities and lifecycle.

\* APIs and external integrations.

\* Authentication and authorization requirements.

\* Security, privacy, accessibility, SEO, performance, and reliability.

\* Hosting, deployment, testing, monitoring, and maintenance.

\* Cost constraints and vendor dependencies.



\### Phase 4: Validation



Check for:



\* Contradictory or ambiguous requirements.

\* Missing permissions and edge cases.

\* Unclear acceptance criteria.

\* Unnecessary features and scope creep.

\* Security risks and hidden costs.

\* Unverified assumptions and dependencies.



\### Phase 5: Documentation



Maintain relevant project documents under `docs/product/`:



\* `PROJECT\_BRIEF.md`

\* `REQUIREMENTS.md`

\* `FEATURE\_CATALOG.md`

\* `USER\_ROLES.md`

\* `USER\_FLOWS.md`

\* `PAGE\_SPECIFICATIONS.md`

\* `TECHNICAL\_ARCHITECTURE.md`

\* `SECURITY\_REQUIREMENTS.md`

\* `ACCEPTANCE\_CRITERIA.md`

\* `IMPLEMENTATION\_PLAN.md`

\* `DECISIONS.md`



Create only documents relevant to the actual project. Do not invent requirements to fill templates.



\### Phase 6: Approval Gate



Present the owner with:



\* Project objectives and scope.

\* MVP features and exclusions.

\* User roles and permissions.

\* Critical user journeys.

\* Proposed technical approach.

\* Security and operational risks.

\* Unresolved questions and assumptions.

\* Implementation phases and acceptance criteria.



Wait for explicit owner approval before implementation begins.



Approval applies only to the reviewed specification version.



\## Change Management



If implementation reveals a contradiction or a significant new requirement:



1\. Record the issue.

2\. Explain its impact.

3\. Propose alternatives.

4\. Request an owner decision when necessary.

5\. Update the approved specification before proceeding with affected work.



\## Handoff



After approval, provide implementation agents with the paths to the approved documents.



All implementation work must remain consistent with the approved specification.



