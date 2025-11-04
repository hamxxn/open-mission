require("@repo/eslint-config/patch");

module.exports = {
  env: { browser: true, es2020: true },
  extends: ["@repo/eslint-config", "@repo/eslint-config/mixins/react"],
  settings: {
    react: {
      version: "18.2",
    },
  },
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
};
