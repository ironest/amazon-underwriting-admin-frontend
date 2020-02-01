import LocalApi from "./../apis/local_api";

export const setAuthToken = (token) => {
  sessionStorage.setItem("token", token);
  return {
      type: "AUTH_TOKEN",
      payload: token
  }
}

export const fetchPages = () => {
  return async (dispatch, getState) => {
      let response = await LocalApi.get("/pages");
      
      return dispatch({
          type: "GET_PAGES",
          payload: response.data
      });
  }
}

export const fetchInfo = () => {
  return async (dispatch, getState) => {
      let response = await LocalApi.get("/info");
      
      return dispatch({
          type: "GET_INFO",
          payload: response.data
      });
  }
}

export const deleteLink = (id) => {
  return async (dispatch, getState) => {
      let response = await LocalApi.delete(`/links/${id}`)
        .catch(err => {
          console.log(err);
        })
     
      return dispatch({
          type: "GET_PAGES",
          payload: response.data
      });
  }
}