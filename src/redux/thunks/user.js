import * as api from "../../api/index.js";
import { hideLoader, showLoader } from "../actions/actions.js";
import { SET_USER_AND_REPOS } from "../constants/actionTypes.js";

export const getUserAndRepos = (username) => async (dispatch) => {
  try {
    const user = await api.getUser(username);
    const repos = await api.getUserRepos(username);
    console.log(repos);
    dispatch({ type: SET_USER_AND_REPOS, data: { user, repos } });
  } catch (error) {
    dispatch({
      type: SET_USER_AND_REPOS,
      data: { user: null, repos: null },
    });
    throw error;
  }
};
