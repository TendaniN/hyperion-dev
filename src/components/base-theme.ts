/**
 * Utility used to obtain Design Tokens from CSS variables.
 * @param token Design token CSS variable key
 * @returns Value of CSS variable
 */
const getToken = (token) =>
  getComputedStyle(document.body).getPropertyValue(`--${token}`).trim();

const radii = {
  none: getToken("radii-none"),
  xxsmall: getToken("radii-xxsmall"),
  xsmall: getToken("radii-xsmall"),
  small: getToken("radii-small"),
  medium: getToken("radii-medium"),
  large: getToken("radii-large"),
  xlarge: getToken("radii-xlarge"),
  xxlarge: getToken("radii-xxlarge"),
  half: getToken("radii-half"),
  full: getToken("radii-full"),
  round: getToken("radii-round"),
} as const;

export type Radius = keyof typeof radii;

const theme = {
  radii,
} as const;

export default theme;
