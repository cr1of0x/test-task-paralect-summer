import * as api from "../../api/index.js";
import { hideLoader, showLoader } from "../actions/actions.js";
import { SET_REPOS, SET_USER } from "../constants/actionTypes.js";

export const getUser = (username) => async (dispatch) => {
  try {
    dispatch(showLoader());
    const user = await api.getUser(username);
    await dispatch({ type: SET_USER, data: { user } });
    dispatch(hideLoader());
  } catch (error) {
    dispatch({
      type: SET_USER,
      data: { user: null },
    });
    dispatch(hideLoader());
    throw error;
  }
};

export const getUserRepos = (username, page) => async (dispatch) => {
  try {
    dispatch(showLoader());
    const repos = await api.getUserRepos(username, page);
    await dispatch({ type: SET_REPOS, data: { repos } });
    dispatch(hideLoader());
  } catch (error) {
    dispatch({
      type: SET_REPOS,
      data: { repos: { data: [] } },
    });
    dispatch(hideLoader());
    throw error;
  }
};
