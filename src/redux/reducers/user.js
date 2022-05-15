import { SET_USER_AND_REPOS } from "../constants/actionTypes";

const initialState = {
  user: null,
  repos: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AND_REPOS:
      return { user: action.data.user, repos: action.data.repos };
    default:
      return state;
  }
};

export default userReducer;
