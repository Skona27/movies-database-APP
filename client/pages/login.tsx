import React from "react";
import { Navbar } from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";
import { LoginForm } from "../components/Forms/LoginForm";

function Login() {
  return (
    <>
      <Navbar />
      <Wrapper padding="1.25rem 1rem" backgroundColor="blue">
        <LoginForm />
      </Wrapper>
    </>
  );
}

export default Login;
