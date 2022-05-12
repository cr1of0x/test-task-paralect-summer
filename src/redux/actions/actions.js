import { HIDE_LOADER, SHOW_LOADER } from "../constants/actionTypes";

export const showLoader = () => {
  return { type: SHOW_LOADER };
};

export const hideLoader = () => {
  return { type: HIDE_LOADER };
};
