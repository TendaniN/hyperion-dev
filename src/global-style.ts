import { createGlobalStyle } from "styled-components";

import theme from "components/base-theme";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: var(--MontserratRegular) !important;
  background-color: var(--white);
}

.scrollbar {
  scrollbar-color: var(--blue) transparent;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--blue);
    border-radius: var(--radii-small);
  }
}
`;

export default GlobalStyle;
