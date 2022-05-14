import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../../redux/thunks/user";

export const Header = () => {
  const [user, setUser] = useState("");

  const dispatch = useDispatch();

  const findUserHandler = () => {
    dispatch(getUser(user));
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
      />
      <button
        onClick={() => {
          findUserHandler();
        }}
      >
        Find
      </button>
    </div>
  );
};
