const fixVH = () =>
  setTimeout(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, 500);

/**
 * pass a vh unit to the css
 */
export const fixVHforMobile = () => {
  // We listen to the resize, orientationchange  event to fix vh unit
  window.addEventListener("orientationchange", fixVH, false);
  window.addEventListener("resize", fixVH, false);
};
