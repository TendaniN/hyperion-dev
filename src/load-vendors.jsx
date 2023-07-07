import React, { useEffect } from "react";

const loadHotjar = () => {
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 1998931, hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
};

const loadBrowserUpdate = () => {
  let $buoop = {
    required: { e: 79, f: 71, o: 62, s: 5, c: 75 },
    insecure: true,
    unsupported: false,
    api: 2020.09,
    reminder: 0,
    noclose: true,
    text: {
      msg: "HyperionDev is not compatible with {brow_name} <br>",
      msgmore: "Please use Chrome, Edge, Safari or Opera",
    },
  };
  function $buo_f() {
    var e = document.createElement("script");
    e.src = "//browser-update.org/update.min.js";
    document.body.appendChild(e);
  }
  try {
    document.addEventListener("DOMContentLoaded", $buo_f, false);
  } catch (e) {
    window.attachEvent("onload", $buo_f);
  }
};

const LoadVendors = (props) => {
  if (!props.enabled) return props.children;

  useEffect(() => {
    loadHotjar();
    loadBrowserUpdate();
  }, []);

  return props.children;
};

export default LoadVendors;
