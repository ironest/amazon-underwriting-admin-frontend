import LocalApi from "./../apis/local_api";

export const setAuthToken = (token) => {
  sessionStorage.setItem("token", token);
  return {
      type: "AUTH_TOKEN",
      payload: token
  }
}