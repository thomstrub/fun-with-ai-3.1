# Product Requirements Document (PRD) - TODO App Upgrade: Due Dates, Priorities, Filters

## 1. Overview

We are upgrading the basic TODO app to support due dates, priorities, and simple filters so users can better organize tasks without adding backend complexity. The MVP emphasizes a lean, teachable scope: local-only storage with no backend changes, a minimal data model extension, and practical filters (All, Today, Overdue). Post‑MVP focuses on visual emphasis for overdue tasks and opinionated sorting.

---

## 2. MVP Scope

- Data model: title (required); priority enum ("P1" | "P2" | "P3", default "P3"); dueDate (optional ISO "YYYY-MM-DD").
- Validation: treat invalid dueDate values as absent (ignored).
- Filters: All, Today, Overdue.
- Filter behavior: All includes completed tasks; Today and Overdue show incomplete tasks only.
- UI: add due date input (ISO date) and priority selector (defaults to P3); provide controls to switch between All/Today/Overdue.
- Storage: local only; no backend changes or external storage/services.

---

## 3. Post-MVP Scope

- Overdue highlighting: visually emphasize overdue tasks (e.g., distinctive styling).
- Sorting rules: Overdue first → Priority (P1 → P2 → P3) → Due date ascending → Undated last.

---

## 4. Out of Scope

- Notifications/alerts/reminders.
- Recurring tasks.
- Multi-user features or account/sharing.
- Keyboard navigation or special accessibility work.
- Any backend or external storage; remains local-only.
