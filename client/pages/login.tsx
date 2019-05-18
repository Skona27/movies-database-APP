import React from "react";
import { Navbar } from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/UI/Input";
import { Button } from "../components/UI/Button";
import { AppContext } from "../components/AppContext";
import { AxiosResponse } from "axios";
import axios from "axios";
import { IUser } from "../components/types";

function Login() {
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
      `http://localhost:3004/api/login`,
      { email, password }
    );
    const user: IUser = response.data;
    dispatch({ type: "loginUser", payload: user });
  };

  return (
    <>
      <Navbar />
      <Wrapper padding="1.25rem 1rem" backgroundColor="blue">
        <form
          css={{
            display: "flex",
            flexDirection: "column"
          }}
          onSubmit={handleFormSubmit}
        >
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailInput}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordInput}
          />

          <Button type="submit" text="Log in" />
        </form>
      </Wrapper>
    </>
  );
}

export default Login;
