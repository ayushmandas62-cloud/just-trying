# Jarvis Core (Implementation Start)

This folder is the **initial implementation scaffold** for the Android Jarvis backend logic.

## Included in this first step

- Channel policy registry (`src/policyRegistry.js`)
  - Supports runtime policy states: `allowed`, `restricted`, `disabled`
  - Intended to gate WhatsApp/Instagram and other channels before automation actions
- Model routing policy (`src/modelRouter.js`)
  - Task-based provider fallback order
  - Budget-aware local fallback path
- High-risk action guard (`src/highRiskActions.js`)
  - Marks sensitive actions that must require explicit user confirmation in UI

## Why this matters

These are the first production safety primitives needed before wiring real provider APIs:

1. **Policy compliance gate** (channel-level restrictions)
2. **Deterministic model routing** (latency + budget-aware)
3. **Action safety guardrail** (confirmation for risky operations)

## Next implementation steps

1. Add an API layer (Ktor/FastAPI/Node) exposing these modules.
2. Add OAuth token lifecycle manager for Google/Microsoft.
3. Integrate Gmail/Calendar + Graph connectors behind permission checks.
4. Add audit logging with trace IDs and structured error taxonomy.
