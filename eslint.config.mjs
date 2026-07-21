import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...coreWebVitals,
  ...typescript,
  {
    // eslint-plugin-react 7.37.5 auto-detects the React version via an API
    // that ESLint 10 removed (context.getFilename), which crashes the run.
    // Setting the version explicitly skips detection entirely.
    // Remove once eslint-plugin-react ships ESLint 10 support.
    settings: { react: { version: "19" } },
  },
];

export default eslintConfig;
