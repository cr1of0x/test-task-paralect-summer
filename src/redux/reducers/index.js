import { combineReducers } from "redux";

import preloader from "./preloader";
import user from "./user";
import repos from "./repos";

export default combineReducers({ preloader, user, repos });
