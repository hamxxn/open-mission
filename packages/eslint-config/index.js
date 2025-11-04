module.exports = {
  plugins: ["no-relative-import-paths"],
  extends: ["@rushstack/eslint-config/profile/web-app"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    // 변수, 함수, 클래스, 인터페이스, 타입 별칭, 열거형 이름 규칙
    "@typescript-eslint/naming-convention": [
      "warn",
      // camelCase 변수, PascalCase 변수, UPPER_CASE 변수 허용
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      // camelCase 함수, PascalCase 함수 허용
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      // PascalCase 클래스, interfaces, type aliases, enums 허용
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      // interface 앞에 I 사용 불가
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
      // typeAlias 앞에 T 사용 불가
      {
        selector: "typeAlias",
        format: ["PascalCase"],
        custom: {
          regex: "^T[A-Z]",
          match: false,
        },
      },
      // typeParameter 앞에 T 사용 불가
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        custom: {
          regex: "^T[A-Z]",
          match: false,
        },
      },
    ],
    //절대 경로 강제 규칙
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { allowSameFolder: true, rootDir: "src", prefix: "@" },
    ],
    //구조 분해 할당 강제 규칙
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
  },
  settings: {},
};
