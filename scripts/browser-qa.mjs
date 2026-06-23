import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
const consoleMessages = [];
const failedRequests = [];

page.on('console', (message) => {
  if (message.type() === 'error') {
    consoleMessages.push(`${message.type()}: ${message.text()}`);
  }
});

page.on('pageerror', (error) => {
  consoleMessages.push(`pageerror: ${error.message}`);
});

page.on('requestfailed', (request) => {
  failedRequests.push(`${request.method()} ${request.url()} ${request.failure()?.errorText}`);
});

await page.goto('http://127.0.0.1:5173/', { waitUntil: 'domcontentloaded' });
await page.waitForSelector('.template-switcher button', { timeout: 10000 });

const desktop = await page.evaluate(readPageState);

await page.locator('.template-switcher button', { hasText: 'Statement' }).click();
await page.waitForTimeout(200);
const statement = await page.evaluate(readPageState);

await page.locator('.template-switcher button', { hasText: 'IEEE Activities' }).click();
await page.waitForTimeout(200);
const activities = await page.evaluate(readPageState);

await page.setViewportSize({ width: 390, height: 1000 });
await page.locator('.template-switcher button', { hasText: 'Profile' }).click();
await page.waitForTimeout(300);
const mobile = await page.evaluate(readPageState);

await browser.close();

const result = {
  desktop,
  statement,
  activities,
  mobile,
  consoleMessages,
  failedRequests,
};

console.log(JSON.stringify(result, null, 2));

if (
  desktop.hasHorizontalOverflow ||
  statement.hasHorizontalOverflow ||
  activities.hasHorizontalOverflow ||
  mobile.hasHorizontalOverflow ||
  activities.activityGroups !== 4 ||
  activities.activityItems !== 48 ||
  consoleMessages.length > 0 ||
  failedRequests.length > 0
) {
  process.exitCode = 1;
}

function readPageState() {
  return {
    title: document.title,
    navLinks: [...document.querySelectorAll('.template-switcher button')].map((button) =>
      button.textContent.trim(),
    ),
    activeTab: document.querySelector('.template-switcher .is-active')?.textContent?.trim() ?? '',
    h1: document.querySelector('main h1')?.textContent?.replace(/\s+/g, ' ').trim() ?? '',
    sections: ['profile', 'statement', 'activities'].map((id) =>
      Boolean(document.getElementById(id)),
    ),
    activityGroups: document.querySelectorAll('.ieee-activity-group').length,
    activityItems: document.querySelectorAll('.ieee-activity-list li').length,
    bodyWidth: document.body.scrollWidth,
    viewportWidth: window.innerWidth,
    hasHorizontalOverflow: document.body.scrollWidth > window.innerWidth + 1,
    templateSpecificElement: Boolean(
      document.querySelector('.document-identity, .ieee-activity-list'),
    ),
  };
}
