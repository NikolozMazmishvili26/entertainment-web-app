import { useForm } from "react-hook-form";
import { useState } from "react";
import styled from "styled-components";

// import assets
import { logo } from "../../../public/assets";
// import components
import { Login, Signup } from "../../components";
// import interface
import { userProps } from "../../App";

function Auth({
  setUser,
  user,
  setAuthenticateUser,
}: {
  setUser: React.Dispatch<React.SetStateAction<userProps[]>>;
  user: userProps[];
  setAuthenticateUser: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  //
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <AuthWrapper>
        {showSignUp ? (
          <Signup
            setShowSignUp={setShowSignUp}
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            getValues={getValues}
            setUser={setUser}
            user={user}
            setValue={setValue}
          />
        ) : (
          <Login
            setShowSignUp={setShowSignUp}
            register={register}
            handleSubmit={handleSubmit}
            user={user}
            setAuthenticateUser={setAuthenticateUser}
          />
        )}
      </AuthWrapper>
    </Container>
  );
}

export default Auth;

const Container = styled.div`
  background-color: var(--dark-blue);
  max-width: 1920px;
  width: 100%;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
`;

const Logo = styled.img`
  margin-top: 48px;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`;

const AuthWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: var(--semi-dark-blue);
  margin-top: 60px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 72px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 80px;
  }
`;
