import axios from "axios";

export const buildAPIUrl = (path) => {
  let baseURL;
  if (
    !import.meta.env.PROD ||
    (window.location.host.includes("localhost") &&
      window.location.port === "3000")
  ) {
    baseURL = import.meta.env.VITE_API_URL as string;
  } else {
    const currentLocation = window.location;
    baseURL = `${currentLocation.protocol}//api.${currentLocation.host}`; // Development ground https://api.develop.hyperion.com OR Production https://api.app.hyperion.com
  }

  return `${baseURL}${path}`;
};

const api = axios.create({
  withCredentials: true,
  // @ts-ignore
  credentials: "same-origin",
  xsrfHeaderName: "X-CSRFToken",
  xsrfCookieName: "csrftoken",
  baseURL: buildAPIUrl("/api/v2"),
  headers: {
    "Content-Type": "application/json",
  },
});

// makes sure that if any url is reached unauthenticated then it is sent to login except if if came from login
api.interceptors.response.use(undefined, (error) => {
  const response = error.response;
  const exceptions = ["/login/"];

  const filteredExceptions = exceptions.filter(
    (val) => response.config.url.toLowerCase().search(val.toLowerCase()) !== -1
  );

  if (
    response.status === 403 &&
    response?.data?.detail ===
      "Authentication credentials were not provided." &&
    filteredExceptions.length === 0
  ) {
    window.location.href = "/login";
  } else {
    return Promise.reject(error);
  }
});

export { api };
