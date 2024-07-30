import { act } from "react";
import { toast } from "react-toastify";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({

    user: userReducer

})
export default rootReducer;