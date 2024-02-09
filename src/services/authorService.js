import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";

export function getAuthors() {
  return axios.get(baseUrl).then(handleResponse).catch(handleError);
}
