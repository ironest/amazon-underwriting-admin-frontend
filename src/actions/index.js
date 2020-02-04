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

export const setInfo = (data) => {
  return async (dispatch, getState) => {

    let response = await LocalApi.put(`/info/`, data)
      .catch(err => {
        console.log(err);
      })
    
    return dispatch({
        type: "GET_INFO",
        payload: response.data
    });
  }
}

export const fetchNews = () => {
  return async (dispatch, getState) => {
      let response = await LocalApi.get("/news");
      
      return dispatch({
          type: "GET_NEWS",
          payload: response.data
      });
  }
}

export const setNews = (id, data) => {
  return async (dispatch, getState) => {

    let response = await LocalApi.put(`/news/${id}`, data)
      .catch(err => {
        console.log(err);
      })
    
    return dispatch({
        type: "GET_NEWS",
        payload: response.data
    });
  }
}

export const deleteNews = (id) => {
  console.log("deleteNews")
  return async (dispatch, getState) => {
    console.log("LocalApi.delete")
    let response = await LocalApi.delete(`/news/${id}`)
      .catch(err => {
        console.log(err);
      })
    
    return dispatch({
        type: "GET_NEWS",
        payload: response.data
    });
  }
}

export const createNews = (data) => {
  console.log("createNews")
  return async (dispatch, getState) => {
    console.log("LocalApi.post")
    let response = await LocalApi.post(`/news/`, data)
      .catch(err => {
        console.log(err);
      })
    
    return dispatch({
        type: "GET_NEWS",
        payload: response.data
    });
  }
}
