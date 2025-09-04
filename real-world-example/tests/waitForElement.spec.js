// @ts-check
const { test, expect } = require("@playwright/test");

test("wait for element example", async ({ page }) => {
  // Open a demo page
  await page.goto("https://brillmark.com/");

  // Wait for heading (Playwright auto-waits)
  const heading = page.locator("h1");
  await expect(heading).toBeVisible();

  // Just for demo: print heading text
  console.log(await heading.textContent());
});
