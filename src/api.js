import axios from "axios";

const API_KEY = "eda1288d-387a-4abd-a0c3-dfa82f0dd5ef";

const API = axios.create({ baseURL: "https://kinopoiskapiunofficial.tech/" });
API.defaults.headers["X-API-KEY"] = API_KEY;
export default API;
