# Claude Code Rules for E2E Testing

## Assume Software Is Working
- Always assume that the software you are testing is functioning correctly.
- Do not make assumptions that features are broken or unavailable.
- The tests you are instructed to implement have been properly verified manually and are known to work.

## Write Robust Tests
- Tests should thoroughly verify the intended functionality without relying on conditionals to bypass or force a passing state.
- Focus on writing tests that properly validate the specific aspects of the system as intended.
- Avoid adding unnecessary logic or checks that could mask real issues.

## Test Incrementally
- When running tests, proceed step-by-step and run individual tests when making changes.
- Avoid running the entire test suite prematurely, especially when tweaking or debugging.
- Validate changes with targeted tests before verifying with the full suite.

## Seek Clarification When Stuck
- If you encounter issues or are unsure how to proceed, don't force a test to pass with incorrect or nonsensical code.
- Instead, ask for clarification or guidance to ensure the tests are validating the right things properly.
- Collaborate to resolve any ambiguities and ensure the tests are meaningful and reliable.

## Use Comments Judiciously
- Comments in the test code are acceptable and encouraged when they provide clarity or explain complex logic.
- However, avoid adding excessive or obvious comments that don't add value to the understanding of the code.
- Refrain from including comments that reference specific instructions given to the AI, as they may not be relevant to the test code itself.

## Maintain Clean Test Code
- Regularly review and clean up the test code to remove any unused variables, commented-out code, or unnecessary console.log statements.
- Keeping the test code clean and concise improves readability and maintainability.

## Utilize Debugging Techniques
- If you encounter difficulties or the tests are not behaving as expected, employ debugging techniques to investigate the issue.
- Add strategic console.log statements to inspect the state of the DOM or relevant variables at specific points in the test.
- Consider capturing snapshots of the rendered output and analyzing the images to identify any discrepancies or visual regressions.
- Consider also inspecting the JS console if you have access to it with Playwright for checking JS errors that might be interesting.

## Learn from Existing Tests
- Take the time to review and understand the current working tests in the codebase.
- Observe the patterns, conventions, and approaches used in the existing tests to ensure consistency and maintainability.
- When implementing new tests, follow similar practices and structures to align with the established testing style and save development time.

By following these guidelines and learning from existing tests, we can create a cohesive and efficient e2e testing suite that effectively validates the functionality of the software. Let's work together to leverage the knowledge gained from previous tests and continuously improve our testing practices.