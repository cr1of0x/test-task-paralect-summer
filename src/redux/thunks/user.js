import * as api from "../../api/index.js";
import { hideLoader, showLoader } from "../actions/actions.js";

export const getUser = (username) => async (dispatch) => {
  try {
    const user = await api.getUser(username);
    dispatch({ type: "SET_USER", data: user });
    const repos = await api.getUserRepos(username);
    dispatch({ type: "SET_REPOS", data: repos });
  } catch (error) {
    dispatch({ type: "SET_USER", data: null });
    dispatch({ type: "SET_REPOS", data: null });
    throw error;
  }
};
