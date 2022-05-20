import { SET_USER, SET_REPOS } from "../constants/actionTypes";

const initialState = {
  user: null,
  repos: { data: [] },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.data.user };
    case SET_REPOS:
      return { ...state, repos: action.data.repos };
    default:
      return state;
  }
};

export default userReducer;
