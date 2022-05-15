import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserAndRepos } from "../../../redux/thunks/user";

export const Header = () => {
  const [user, setUser] = useState("");

  const dispatch = useDispatch();

  const findUserHandler = () => {
    dispatch(getUserAndRepos(user));
  };

  const onChangeHandler = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <input
        onChange={(e) => {
          onChangeHandler(e);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            findUserHandler();
          }
        }}
      />
    </div>
  );
};
