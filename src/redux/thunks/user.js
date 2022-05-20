import * as api from "../../api/index.js";
import { hideLoader, showLoader } from "../actions/actions.js";
import { SET_REPOS, SET_USER } from "../constants/actionTypes.js";

export const getUser = (username) => async (dispatch) => {
  try {
    const user = await api.getUser(username);
    dispatch({ type: SET_USER, data: { user } });
  } catch (error) {
    dispatch({
      type: SET_USER,
      data: { user: null },
    });
    throw error;
  }
};

export const getUserRepos = (username, page) => async (dispatch) => {
  try {
    const repos = await api.getUserRepos(username, page);
    dispatch({ type: SET_REPOS, data: { repos } });
  } catch (error) {
    dispatch({
      type: SET_REPOS,
      data: { repos: { data: [] } },
    });
    throw error;
  }
};
