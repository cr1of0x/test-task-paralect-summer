import { SET_USER, SET_REPOS, USER_NOT_FOUND } from "../constants/actionTypes";

const initialState = {
  user: null,
  repos: { data: [] },
  isFound: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.data.user, isFound: true };
    case SET_REPOS:
      return { ...state, repos: action.data.repos };
    case USER_NOT_FOUND:
      return { ...state, user: null, isFound: false };
    default:
      return state;
  }
};

export default userReducer;
