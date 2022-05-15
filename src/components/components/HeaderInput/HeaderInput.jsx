import { useState } from "react";

export const HeaderInput = ({ findUserHandler }) => {
  const [user, setUser] = useState("");

  const onChangeHandler = (e) => {
    setUser(e.target.value);
  };
  return (
    <input
      onChange={(e) => {
        onChangeHandler(e);
      }}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          findUserHandler(user);
        }
      }}
    />
  );
};
