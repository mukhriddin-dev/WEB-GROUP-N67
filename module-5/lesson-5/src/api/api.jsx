import axios from "axios";

const baseURL = "https://restcountries.com/v2";

export const API = {
  getAll: async () => axios.get(`${baseURL}/all`),
  getItem: async (title) => axios.get(`${baseURL}/name/${title}`),
};
