import { test, expect } from "@playwright/test";
import { E2E_TEST_APP_CONFIG, getStoryUrl } from "./config";

/**
 * Integer Widget Backward Compatibility Tests
 *
 * These tests verify that the BigInt fix doesn't break existing behavior:
 * 1. Normal integers (within safe range) must return `number` type in onChange
 * 2. BigInt values (beyond safe range) must return `bigint` type in onChange
 * 3. Display formatting must be correct for both localized and non-localized modes
 *
 * This is CRITICAL for backward compatibility - existing code expects `number` type
 * for normal integers.
 */

test.describe("Integer Widget Backward Compatibility", () => {
  test.describe("onChange Type Verification - Non-Localized", () => {
    test("normal integer onChange returns 'number' type", async ({ page }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.NON_LOCALIZED_ENGLISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');
      await input.fill("1234");
      await input.blur();

      await page.waitForTimeout(100);

      const lastType = await page.locator('[data-testid="last-type"]').textContent();
      const lastValue = await page.locator('[data-testid="last-value"]').textContent();

      expect(lastType).toBe("number");
      expect(lastValue).toBe("1234");
    });

    test("zero onChange returns 'number' type", async ({ page }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.NON_LOCALIZED_ENGLISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');
      await input.fill("0");
      await input.blur();

      await page.waitForTimeout(100);

      const lastType = await page.locator('[data-testid="last-type"]').textContent();
      const lastValue = await page.locator('[data-testid="last-value"]').textContent();

      expect(lastType).toBe("number");
      expect(lastValue).toBe("0");
    });

    test("negative integer onChange returns 'number' type", async ({ page }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.NON_LOCALIZED_ENGLISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');
      await input.fill("-42");
      await input.blur();

      await page.waitForTimeout(100);

      const lastType = await page.locator('[data-testid="last-type"]').textContent();
      const lastValue = await page.locator('[data-testid="last-value"]').textContent();

      expect(lastType).toBe("number");
      expect(lastValue).toBe("-42");
    });

    test("MAX_SAFE_INTEGER onChange returns 'number' type", async ({ page }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.NON_LOCALIZED_ENGLISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');
      // Number.MAX_SAFE_INTEGER = 9007199254740991
      await input.fill("9007199254740991");
      await input.blur();

      await page.waitForTimeout(100);

      const lastType = await page.locator('[data-testid="last-type"]').textContent();
      const lastValue = await page.locator('[data-testid="last-value"]').textContent();

      expect(lastType).toBe("number");
      expect(lastValue).toBe("9007199254740991");
    });

    test("first unsafe integer onChange returns 'bigint' type", async ({ page }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.NON_LOCALIZED_ENGLISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');
      // First value beyond MAX_SAFE_INTEGER
      await input.fill("9007199254740992");
      await input.blur();

      await page.waitForTimeout(100);

      const lastType = await page.locator('[data-testid="last-type"]').textContent();
      const lastValue = await page.locator('[data-testid="last-value"]').textContent();

      expect(lastType).toBe("bigint");
      expect(lastValue).toBe("9007199254740992");
    });

    test("large BigInt onChange returns 'bigint' type", async ({ page }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.NON_LOCALIZED_ENGLISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');
      // A large BigInt value
      await input.fill("4614634274427387912");
      await input.blur();

      await page.waitForTimeout(100);

      const lastType = await page.locator('[data-testid="last-type"]').textContent();
      const lastValue = await page.locator('[data-testid="last-value"]').textContent();

      expect(lastType).toBe("bigint");
      expect(lastValue).toBe("4614634274427387912");
    });
  });

  test.describe("onChange Type Verification - Localized (Spanish)", () => {
    test("normal integer onChange returns 'number' type with localized input", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.LOCALIZED_SPANISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');
      await input.fill("1234");
      await input.blur();

      await page.waitForTimeout(100);

      const lastType = await page.locator('[data-testid="last-type"]').textContent();
      const lastValue = await page.locator('[data-testid="last-value"]').textContent();

      expect(lastType).toBe("number");
      expect(lastValue).toBe("1234");
    });

    test("BigInt onChange returns 'bigint' type with localized input", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.LOCALIZED_SPANISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');
      await input.fill("9007199254740992");
      await input.blur();

      await page.waitForTimeout(100);

      const lastType = await page.locator('[data-testid="last-type"]').textContent();
      const lastValue = await page.locator('[data-testid="last-value"]').textContent();

      expect(lastType).toBe("bigint");
      expect(lastValue).toBe("9007199254740992");
    });
  });

  test.describe("Display Formatting - Non-Localized", () => {
    test("displays integer without thousands separator", async ({ page }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.NON_LOCALIZED_ENGLISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');
      await input.fill("1234567");
      await input.blur();

      await page.waitForTimeout(100);

      const inputValue = await input.inputValue();
      // Non-localized should not have thousands separator
      expect(inputValue).toBe("1234567");
    });
  });

  test.describe("Display Formatting - Localized (Spanish)", () => {
    test("displays integer with Spanish thousands separator on blur", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.LOCALIZED_SPANISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');
      await input.fill("1234567");
      await input.blur();

      await page.waitForTimeout(100);

      const inputValue = await input.inputValue();
      // Spanish localized should have period as thousands separator: 1.234.567
      expect(inputValue).toBe("1.234.567");
    });
  });

  test.describe("Display Formatting - Localized (English)", () => {
    test("displays integer with English thousands separator on blur", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.LOCALIZED_ENGLISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');
      await input.fill("1234567");
      await input.blur();

      await page.waitForTimeout(100);

      const inputValue = await input.inputValue();
      // English localized should have comma as thousands separator: 1,234,567
      expect(inputValue).toBe("1,234,567");
    });
  });

  test.describe("Input Behavior", () => {
    test("user can type and edit values", async ({ page }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.NON_LOCALIZED_ENGLISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');

      // Type first value
      await input.fill("999");
      await input.blur();
      await page.waitForTimeout(100);

      expect(await page.locator('[data-testid="last-value"]').textContent()).toBe("999");
      expect(await page.locator('[data-testid="last-type"]').textContent()).toBe("number");

      // Clear and type new value
      await input.fill("12345");
      await input.blur();
      await page.waitForTimeout(100);

      expect(await page.locator('[data-testid="last-value"]').textContent()).toBe("12345");
      expect(await page.locator('[data-testid="last-type"]').textContent()).toBe("number");
    });

    test("handles clearing input", async ({ page }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.NON_LOCALIZED_ENGLISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');

      // Type value first
      await input.fill("1234");
      await input.blur();
      await page.waitForTimeout(100);

      // Clear the input
      await input.fill("");
      await input.blur();
      await page.waitForTimeout(100);

      const lastType = await page.locator('[data-testid="last-type"]').textContent();
      expect(lastType).toBe("null");
    });
  });

  test.describe("BigInt Precision", () => {
    test("large integers maintain precision (no precision loss)", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.INTEGER_ONCHANGE.NON_LOCALIZED_ENGLISH)
      );

      await page.waitForSelector('[data-testid="integer-input"]', { state: "visible" });

      const input = page.locator('[data-testid="integer-input"]');

      // This value would lose precision with parseFloat
      // parseFloat("4614634274427387912") = 4614634274427388000
      const bigIntValue = "4614634274427387912";
      await input.fill(bigIntValue);
      await input.blur();

      await page.waitForTimeout(100);

      const lastValue = await page.locator('[data-testid="last-value"]').textContent();
      const inputValue = await input.inputValue();

      // Must NOT have precision loss
      expect(lastValue).toBe(bigIntValue);
      expect(inputValue).toBe(bigIntValue);

      // parseFloat would give this wrong value
      expect(lastValue).not.toBe("4614634274427388000");
    });
  });
});
