import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,

    // THIS WILL NOW WORK — it comes LAST and overrides everything
    "@typescript-eslint/no-explicit-any": "warn",  // Now respected!

    // Optional: other good rules
    "@typescript-eslint/no-unused-vars": "warn",
    "no-console": "warn",
  }},
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  
]);

export default eslintConfig;
