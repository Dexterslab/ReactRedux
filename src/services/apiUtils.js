export async function handleResponse(response) {
  // Axios automatically provides the response data in the `data` field,
  // so you don't need to parse it as JSON.
  return response.data;
}

export function handleError(error) {
  // Axios wraps the response error. The actual response is available in `error.response`.
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (error.response.status === 400) {
      // Handle server-side validation error.
      // The error message is available directly as we don't need to parse it from text.
      throw new Error(error.response.data || "Network response was not ok.");
    }
    throw new Error("Network response was not ok.");
  } else if (error.request) {
    // The request was made but no response was received
    console.error("No response was received for the API call");
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("API call failed. " + error.message);
  }

  throw error;
}
