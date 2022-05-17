import axios from "axios";

const API = axios.create({ baseURL: "https://api.github.com/" });

export const getUser = (username) => API.get(`users/${username}`);
export const getUserRepos = (username) =>
  API.get(`users/${username}/repos?per_page=4&page=1
  `);
