# E2E Test App - Development Guidelines

## Overview
This is a test application for `@gisce/react-ooui` library that uses Vite to serve different component "stories" for end-to-end testing. **This is NOT a Storybook project** - it's a custom React app that mimics story-like functionality for testing purposes.

## Project Structure
- **Library Source**: Navigate to `../react-ooui/` for the main library code
- **Stories**: Located in `src/stories/` - each story tests specific components/scenarios
- **E2E Tests**: Located in `e2e/` directory using Playwright
- **Mock Data**: Each story has associated `.mocks.ts` and `.mockProvider.ts` files

If you need to look up library details please navigate to ../../{library-name}