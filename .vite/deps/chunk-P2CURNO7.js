import {
  defaultTheme_default,
  identifier_default,
  init_defaultTheme,
  init_esm2 as init_esm,
  init_identifier,
  useTheme_default
} from "./chunk-A25YZC5C.js";
import {
  __toESM,
  require_react
} from "./chunk-2FATVHAI.js";

// node_modules/@mui/material/styles/useTheme.js
var React = __toESM(require_react());
init_esm();
init_defaultTheme();
init_identifier();
function useTheme() {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React.useDebugValue(theme);
  }
  return theme[identifier_default] || theme;
}

export {
  useTheme
};
//# sourceMappingURL=chunk-P2CURNO7.js.map
