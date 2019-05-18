import React from "react";
import { Navbar } from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";
import { Input } from "../components/UI/Input";
import { Button } from "../components/UI/Button";
import { AppContext } from "../components/AppContext";
import { AxiosResponse } from "axios";
import axios from "axios";
import { IUser } from "../components/types";

function Register() {
  const { dispatch } = React.useContext(AppContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleInput = (setInput: (value: string) => void, value: string) =>
    setInput(value);

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const response: AxiosResponse = await axios.post(
      `http://localhost:3004/api/register`,
      { email, password, firstName, lastName }
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
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(event: React.FormEvent<HTMLSelectElement>) =>
              handleInput(setFirstName, event.currentTarget.value)
            }
          />
          <Input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(event: React.FormEvent<HTMLSelectElement>) =>
              handleInput(setLastName, event.currentTarget.value)
            }
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event: React.FormEvent<HTMLSelectElement>) =>
              handleInput(setEmail, event.currentTarget.value)
            }
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event: React.FormEvent<HTMLSelectElement>) =>
              handleInput(setPassword, event.currentTarget.value)
            }
          />

          <Button type="submit" text="Register" />
        </form>
      </Wrapper>
    </>
  );
}

export default Register;
