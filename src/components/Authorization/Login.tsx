import { useState } from "react";
import styled from "styled-components";
import {
  UseFormRegister,
  FieldValues,
  UseFormHandleSubmit,
} from "react-hook-form/dist/types";

// import component
import { Button } from "../../components";
import { userProps } from "../../App";

// interface

interface login {
  setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  user: userProps[];
  setAuthenticateUser: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({
  setShowSignUp,
  handleSubmit,
  register,
  user,
  setAuthenticateUser,
}: login) {
  //
  const [error, setError] = useState(false);
  //
  const onSubmit = (data: any) => {
    const authenticatedUser = user.find(
      (u) => u.email === data.loginEmail && u.password === data.loginPassword
    );
    if (authenticatedUser) {
      setAuthenticateUser(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Login</Title>
      <Wrapper>
        <Input
          type="email"
          placeholder="Email address"
          {...register("loginEmail")}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register("loginPassword")}
        />
        {/* error message */}
        {error && <Error>Email or password is incorrect.</Error>}
      </Wrapper>
      <Button text="Login to your account" />
      <CreateContainer>
        <Warning>Don't have an account?</Warning>
        <AuthButton type="button" onClick={() => setShowSignUp(true)}>
          Sign Up
        </AuthButton>
      </CreateContainer>
    </Form>
  );
}

export default Login;

const Form = styled.form`
  padding: 23px 24px 33px 23px;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
  color: var(--white-color);
`;

const Wrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-bottom: 40px;
`;

const Input = styled.input`
  font-family: "Outfit", sans-serif;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--greyish-blue);
  padding: 0px 0px 17px 16px;
  outline: none;
  color: var(--white-color);
  height: 37px;

  &::placeholder {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    color: var(--white-color);
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

const CreateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const Warning = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  color: var(--white-color);
`;

const AuthButton = styled.button`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  color: var(--red-color);
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: #fe6262;
  }
`;

const Error = styled.p`
  text-align: center;
  color: white;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
