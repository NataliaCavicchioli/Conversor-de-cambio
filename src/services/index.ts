import axios from "axios";

const dev =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

export const api = axios.create({
  baseURL: dev,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
