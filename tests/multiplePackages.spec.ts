import endpoint from "./configTypes"
import { test, expect } from '@playwright/test'

test("Expect to have 2 packages for subscription", async ({ page }) => {

  // Go to the Droplets product page of DigitalOcean web page
  await page.goto(endpoint.DIGITAL_OCEAN_URL);

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Get the number of packages to be 2 (Basic and Premium)
  const number_subscriptions_allowed = await page.locator('.Typographystyles-sc-o7qsl9-0 gJSbqt > div').textContent()

  // Verify that number equals 2
  expect(number_subscriptions_allowed).toBe('600k')
});