import LocalApi from "./../apis/local_api";

export const setAuthToken = (token) => {
  sessionStorage.setItem("token", token);
  return {
      type: "AUTH_TOKEN",
      payload: token
  }
}

export const setLink = (link) => {
  return {
      type: "SET_LINK",
      payload: link
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

export const createLink = (data) => {
  return async (dispatch, getState) => {
      let response = await LocalApi.post(`/links`, data)
        .catch(err => {
          console.log(err);
        })
     
      return dispatch({
          type: "GET_PAGES",
          payload: response.data
      });
  }
}

export const editLink = (id, data) => {
  return async (dispatch, getState) => {
      let response = await LocalApi.put(`/links/${id}`, data)
        .catch(err => {
          console.log(err);
        })
     
      return dispatch({
          type: "GET_PAGES",
          payload: response.data
      });
  }
}
