import { createGlobalStyle } from "styled-components";

import theme from "components/base-theme";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: var(--MontserratRegular) !important;
}
`;

export default GlobalStyle;
