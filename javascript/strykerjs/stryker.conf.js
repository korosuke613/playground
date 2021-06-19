/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress", "dashboard"],
  testRunner: "jest",
  coverageAnalysis: "perTest",
  thresholds: { "high": 85, "low": 80, "break": 75 }
};
