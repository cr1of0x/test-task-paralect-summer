import {
  HIDE_LOADER,
  SET_REPOS,
  SET_USER,
  SHOW_LOADER,
  USER_NOT_FOUND,
} from "../constants/actionTypes";

export const showLoader = () => {
  return { type: SHOW_LOADER };
};

export const hideLoader = () => {
  return { type: HIDE_LOADER };
};

export const setUser = (data) => {
  return { type: SET_USER, data };
};

export const userNotFound = () => {
  return { type: USER_NOT_FOUND };
};

export const setRepos = (data) => {
  return { type: SET_REPOS, data };
};
