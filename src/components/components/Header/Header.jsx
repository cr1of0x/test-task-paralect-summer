import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserAndRepos } from "../../../redux/thunks/user";
import { FaGithub } from "react-icons/fa";
import { HeaderInput } from "../HeaderInput/HeaderInput";

export const Header = () => {
  const dispatch = useDispatch();

  const findUserHandler = (user) => {
    dispatch(getUserAndRepos(user));
  };

  return (
    <div>
      <FaGithub />
      <HeaderInput findUserHandler={findUserHandler} />
    </div>
  );
};
