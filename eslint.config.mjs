import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  {rules: {'class-methods-use-this': 'off', 'consistent-return': 'off', camelcase: 'off'}},
  pluginJs.configs.recommended,
];