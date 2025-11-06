# AI Assistant Instructions

## Project Overview
- `@gisce/react-ooui` is the shared ERP UI component library consumed by other `@gisce/*` packages.
- Sibling repositories for direct `@gisce/*` dependencies live one directory up from this project; consult them when you need implementation references.
- The library is built with Vite and TypeScript and publishes compiled artifacts to `dist/`.

## Environment
- Required tooling: Node 20.5.0 and npm 9.8.0 (see `package.json`).
- Install dependencies with `npm install` before running any build or lint command.

## Additional Guides
- [Creating New Views](docs/CREATING_NEW_VIEWS.md)

## Workflow Rules
- Do not run Vitest (`npm run test`, `npm run test:*`) or start dev servers unless the user requests it.
- After every change, run the full suite of checks in this order:
  - `npm run check` (project lint pipeline).
  - `npx eslint src --ext .ts,.tsx` (scope this to touched files when practical).
  - `npm run build:tsc` for the TypeScript check that respects `tsconfig.build.json`.
- `npm run check` only triggers lint-staged; it does **not** cover the required TypeScript or ESLint passes.
- `npm run build:tsc` runs `tsc -p tsconfig.build.json --noEmit`, satisfying the `npx tsc --noEmit` requirement.
- Fix every ESLint warning and TypeScript error before handing work back.
- Keep type safety and readability high; never finish a task without running the checks above.

## Code Style
- Favor self-documenting code: pick clear, descriptive names and refactor confusing logic instead of documenting it.
- Keep the codebase essentially comment-free (target 99% of files without comments); only add one when it is the sole way to explain complex business logic, and never reference prompts or instructions.


## React Guidelines
- Import hooks directly from `react` (`import { useState, useEffect, useCallback, useMemo, memo } from "react"`); never use `React.useState` style access.
- Wrap every prop-level handler in `useCallback`, and memoize derived data with `useMemo`.
- Use `useDeepCompareCallback`, `useDeepCompareMemo`, or `useDeepCompareEffect` only when dependencies are non-primitive (objects, arrays). Prefer regular hooks for primitive dependencies.
- When deep comparison is required, import the helpers from `"use-deep-compare"` (`useDeepCompareCallback`, `useDeepCompareMemo`, `useDeepCompareEffect`).
- Avoid `useEffect` unless performing a true side effect (fetching data, subscriptions, DOM integrations, logging). Move pure computations into render paths or `useMemo`, and handle user events directly instead of through effects.
- Always provide the correct dependency array to `useEffect`, `useCallback`, and `useMemo`. Switch to the `use-deep-compare` variants when tracking objects or arrays to avoid stale dependencies.
- Never use effects to transform render data, derive state from props, reset state for prop changes, or handle user interactions—calculate during render or via memoization instead.
- Use effects only for side-effectful work such as data fetching, subscriptions, imperative DOM interaction, integrating external libraries, or analytics.
- Export components wrapped in `memo` for performance unless a deliberate re-render is required.
- Encapsulate components that could fail in `ErrorBoundary` (import from `antd/es/alert/ErrorBoundary`) to prevent crashes from propagating and improve error handling.

## Localization
- Localize every user-facing string by reusing existing translation keys; search the locale files before adding new ones.
- Access translations via `const { t } = useLocale();` and call `t("translation.key")` instead of hard-coding strings.
- Extend the locale dictionaries when a key does not yet exist, keeping naming consistent with surrounding entries.

## Network Requests
- Always rely on `useNetworkRequest` for RPC calls; the hook returns `[execute, cancel]`.
- Cancel outstanding requests on unmount and when dependencies change. Follow existing patterns such as `src/widgets/base/one2many/useTreeColumnRemoteStorage.ts`.
- Ensure cancel functions are invoked in cleanup paths to prevent stale updates.

## Build Outputs and Examples
- Production bundles land in `dist/`;
- The runnable example lives under `e2e-test-app/` (the legacy README reference to an `example/` folder is outdated).

## Repo Policies
- Do not revert or overwrite user-authored changes, and leave unrelated files untouched. If a file already contains user edits you did not author, leave them as-is.
- Never perform git operations (commits, pushes, merges) from the assistant environment.
