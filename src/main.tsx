import React, { useState } from "react";
import { Providers } from "state/providers";
import { registerSW } from "virtual:pwa-register";
import { BrowserRouter } from "react-router-dom";
import { CompatRouter } from "react-router-dom-v5-compat";
import "./App.css";
import LoadVendors from "load-vendors";

if (import.meta.env.PROD) {
  registerSW();
}

function Main() {
  return (
    <React.StrictMode>
      <Providers>
        <LoadVendors enabled={import.meta.env.PROD}>
          <BrowserRouter>
            <CompatRouter>
              <div></div>
            </CompatRouter>
          </BrowserRouter>
        </LoadVendors>
      </Providers>
    </React.StrictMode>
  );
}

export default Main;
