/** @type {import("eslint").Linter.Config} */
const config = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        // project: true,
        project: "./tsconfig.json", // Ensure this points to your tsconfig.json file
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    extends: [
        // "next/core-web-vitals",
        // "plugin:@typescript-eslint/recommended-type-checked",
        // "plugin:@typescript-eslint/stylistic-type-checked",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/stylistic",
        "next/core-web-vitals",
  
    ],
    rules: {
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/consistent-type-imports": [
            "warn",
            {
                prefer: "type-imports",
                fixStyle: "inline-type-imports",
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
            },
        ],
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                checksVoidReturn: {
                    attributes: false,
                },
            },
        ],
    },
};
module.exports = config;
