import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "" // relative URLs for deployed app on Vercel
    : "http://localhost:3000/api"; // local development

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
