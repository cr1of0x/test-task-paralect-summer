import { combineReducers } from "redux";

import preloader from "./preloader";
import user from "./user";

export default combineReducers({ preloader, user });
