/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    // Maximum time one test can run (30 seconds)
    timeout: 30000,
    use: {
      // Run tests in headless mode (no visible browser)
      headless: true,
      // Set viewport size to standard desktop resolution
      viewport: { width: 1280, height: 720 },
      // Ignore HTTPS errors if the site has invalid certificates
      ignoreHTTPSErrors: true,
    },
    // Define test reporters
    reporter: [
      // Simple list reporter in console
      ['list'],
      // Generate an HTML report in the playwright-report folder (do not auto-open)
      ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ],
  
    // Specify the directory containing test files
    testDir: './tests',
  };
  
  module.exports = config;
  