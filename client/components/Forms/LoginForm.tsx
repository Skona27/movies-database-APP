import React from "react";
import { useTheme } from "../../hooks/Theme";
import { AxiosResponse } from "axios";
import axios from "axios";
import { IUser } from "../types";
import { AppContext } from "../AppContext";

interface IProps {}

export const LoginForm: React.FC<IProps> = React.memo(() => {
  const { colors } = useTheme();
  const { dispatch } = React.useContext(AppContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailInput = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setEmail(event.target.value);

  const handlePasswordInput = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setPassword(event.target.value);

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const response: AxiosResponse = await axios.post(
      `http://192.168.1.101:3001/api/login`,
      { email, password }
    );
    const user: IUser = response.data;
    dispatch({ type: "loginUser", payload: user });
  };

  const inputStyle = {
    padding: ".5rem .75rem",
    width: "20rem",
    marginRight: "1.75rem",
    fontSize: "1rem",
    fontWeight: 400,
    borderRadius: 2,
    border: "none",
    outlineColor: colors.black,
    color: colors.black,
    backgroundColor: colors.white
  };

  return (
    <form
      css={{
        display: "flex"
      }}
      onSubmit={handleFormSubmit}
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailInput}
        css={inputStyle}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordInput}
        css={inputStyle}
      />

      <button
        type="submit"
        css={{
          border: "none",
          backgroundColor: colors.black,
          color: colors.white,
          padding: "0 1.75rem",
          fontWeight: 600,
          transition: "color .15s ease-in",
          "&:hover": {
            cursor: "pointer",
            color: colors.blue
          }
        }}
      >
        Log in
      </button>
    </form>
  );
});

LoginForm.displayName = "LoginForm";
