import * as api from "../../api/index.js";
import {
  hideLoader,
  setRepos,
  setUser,
  showLoader,
  userNotFound,
} from "../actions/actions.js";

export const getUser = (username) => async (dispatch) => {
  try {
    dispatch(showLoader());
    const user = await api.getUser(username);
    await dispatch(setUser({ user }));
    dispatch(hideLoader());
  } catch (error) {
    dispatch(userNotFound());
    dispatch(hideLoader());
    throw error;
  }
};

export const getUserRepos = (username, page) => async (dispatch) => {
  try {
    dispatch(showLoader());
    const repos = await api.getUserRepos(username, page);
    await dispatch(setRepos({ repos }));
    dispatch(hideLoader());
  } catch (error) {
    dispatch(setRepos({ repos: { data: [] } }));
    dispatch(hideLoader());
    throw error;
  }
};
