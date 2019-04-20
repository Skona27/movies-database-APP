import React from "react";
import { AppContext } from "../components/AppContext";
import { IUser } from "../components/types";

export const WithAuth: React.FC = ({ children }) => {
  const { dispatch } = React.useContext(AppContext);

  React.useEffect(() => {
    const savedUserData = localStorage.getItem("user");

    if (savedUserData) {
      const user: IUser = JSON.parse(savedUserData);
      dispatch({ type: "loginUser", payload: user });
    }
  }, []);

  return <>{children}</>;
};
