import React, { useEffect } from "react";
import { Providers } from "state/providers";
import { registerSW } from "virtual:pwa-register";
import { BrowserRouter } from "react-router-dom";
import { CompatRouter } from "react-router-dom-v5-compat";
import { ThemeProvider } from "styled-components";
import { fixVHforMobile } from "utils/fix-vh";
import Pages from "pages";
import GlobalStyle from "global-style";

import theme from "components/base-theme";

import LoadVendors from "load-vendors";

if (import.meta.env.PROD) {
  registerSW();
}

function Main() {
  useEffect(() => {
    fixVHforMobile();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Providers>
        <LoadVendors enabled={import.meta.env.PROD}>
          <BrowserRouter>
            <CompatRouter>
              <Pages />
            </CompatRouter>
          </BrowserRouter>
        </LoadVendors>
      </Providers>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default Main;
