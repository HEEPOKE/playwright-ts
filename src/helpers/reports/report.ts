const report = require("multiple-cucumber-html-reporter");
// import report from "multiple-cucumber-html-reporter";

report.generate({
  jsonDir: "results",
  reportPath: "results/reports/",
  reportName: "Playwright Automation Report",
  pageTitle: "Youtube test report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "112",
    },
    device: "HEEPOKE - PC",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test Info",
    data: [
      { label: "Project", value: "Youtube Application" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "Smoke-1" },
    ],
  },
});
