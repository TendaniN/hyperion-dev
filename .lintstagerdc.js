module.exports = {
  "*.{html,md,json,yml,css,js,ts,tsx}": "prettier --write",
  "src/**/*.{js,ts,tsx,ts}": ["eslint --fix"],
  "src/**/*.{ts,tsx}":
    "bash -c tsc --project tsconfig.json --noEmit --noErrorTruncation --pretty",
};
