const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation
        "style", // Code style (no logic changes)
        "refactor", // Code refactoring
        "perf", // Performance improvements
        "test", // Adding/updating tests
        "build", // Build system
        "ci", // CI configuration
        "chore", // General maintenance
        "revert", // Revert changes
      ],
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 100],
  },
}

export default config
