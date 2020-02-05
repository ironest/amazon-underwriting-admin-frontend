import axios from "axios";
import store from "./../store";

const LocalApi = axios.create({
    baseURL: `${process.env.REACT_APP_BASEURL}`
});

LocalApi.interceptors.request.use(function(config) {

    const state = store.getState();
    const token = state.auth.token;

    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    }

    return config;
})

LocalApi.interceptors.response.use(function(response) {
        return response;
    },
    function(error) {

        if (error.response.status === 401) {

            console.log("The token seems to be invalid");

            store.dispatch({
                type: "AUTH_TOKEN",
                payload: null
            })

        }
    }
)

export default LocalApi;