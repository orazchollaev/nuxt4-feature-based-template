import type { UserConfig } from "@commitlint/types"

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // Yeni özellik
        "fix", // Bug düzeltme
        "docs", // Dokümantasyon
        "style", // Kod formatı (mantık değişikliği yok)
        "refactor", // Refactor
        "perf", // Performans iyileştirme
        "test", // Test ekleme/düzenleme
        "build", // Build sistemi
        "ci", // CI konfigürasyonu
        "chore", // Genel bakım
        "revert", // Revert
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
