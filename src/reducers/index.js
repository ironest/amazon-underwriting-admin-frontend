import { combineReducers } from "redux";
import authReducer from "./auth_reducer.js";
import pageReducer from "./page_reducer.js";
import infoReducer from "./info_reducer.js";
import fileReducer from "./file_reducer";

export default combineReducers({
    auth: authReducer,
    pages: pageReducer,
    info: infoReducer,
    file: fileReducer
    
});
