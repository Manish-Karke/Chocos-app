import axios from "axios";

const baseURL ="https://my-book-store-n6ii.vercel.app/products"

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
