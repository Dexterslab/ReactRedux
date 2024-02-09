import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/courses/";

export function getCourses() {
  return axios.get(baseUrl).then(handleResponse).catch(handleError);
}

export function saveCourse(course) {
  const method = course.id ? "put" : "post";
  const url = baseUrl + (course.id || "");

  return axios({
    method,
    url,
    headers: { "Content-Type": "application/json" },
    data: course,
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return axios
    .delete(baseUrl + courseId)
    .then(handleResponse)
    .catch(handleError);
}
