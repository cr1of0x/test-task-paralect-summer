const initialState = {
  repos: null,
};

const userReposReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REPOS":
      return { repos: action.data };
    default:
      return state;
  }
};

export default userReposReducer;
