import { test, expect } from "@playwright/test";
import { STORYBOOK_CONFIG, getStoryUrl } from "./config";

test.describe("Infinite TreeActionView Component", () => {
  test("should display infinite tree view story", async ({ page }) => {
    // Navigate to the infinite tree view story
    await page.goto(
      getStoryUrl(STORYBOOK_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    // Wait for the component to load
    await page.waitForSelector(".tree-action-view-container", {
      timeout: 10000,
    });

    // Check that the page title contains the expected content
    await expect(page.locator("text=Employee Management")).toBeVisible();

    // Verify that there are employee records displayed
    const emailElements = page.locator("span[id^='cell-email-']");
    await expect(emailElements.first()).toBeVisible();
    const count = await emailElements.count();
    expect(count).toBeGreaterThan(0);

    // Check for the presence of AG Grid elements
    await expect(page.locator(".ag-root-wrapper")).toBeVisible();
    await expect(page.locator(".ag-center-cols-container")).toBeVisible();

    // Take a screenshot for visual comparison
    await page.screenshot({ path: "e2e/screenshots/infinite-tree-view.png" });
  });

  test("should have responsive layout", async ({ page }) => {
    // Test on different viewport sizes
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(
      getStoryUrl(STORYBOOK_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".tree-action-view-container", {
      timeout: 10000,
    });

    // Verify the component is visible and properly sized
    const container = page.locator(".tree-action-view-container");
    await expect(container).toBeVisible();

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500); // Allow time for responsive changes

    // Component should still be visible (though layout may change)
    await expect(container).toBeVisible();

    // Take screenshots for different viewport sizes
    await page.screenshot({ path: "e2e/screenshots/mobile-tree-view.png" });
  });
});
