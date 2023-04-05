import { useState } from "react";
import styled from "styled-components";

// import assets
import { logo } from "../../../public/assets";

// import components
import { Authorization } from "../../components";

function Auth() {
  //
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <AuthWrapper>
        {showSignUp ? (
          <Authorization
            setShowSignUp={setShowSignUp}
            title="Sign Up"
            warning="Already have an account?"
            authButtonText="Login"
          />
        ) : (
          <Authorization
            setShowSignUp={setShowSignUp}
            title="Login"
            warning="Don't have an account?"
            authButtonText="Sign Up"
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
