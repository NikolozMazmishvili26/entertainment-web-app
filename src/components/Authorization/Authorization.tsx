import styled from "styled-components";

// import component
import { Button } from "../../components";

function Authorization({
  setShowSignUp,
  title,
  warning,
  authButtonText,
}: {
  setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  warning: string;
  authButtonText: string;
}) {
  //

  const handleShowAuth = () => {
    if (title === "Sign Up") {
      console.log("shamavidaaa");
      setShowSignUp(false);
    } else {
      setShowSignUp(true);
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Wrapper>
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />
        {title === "Sign Up" && (
          <Input type="password" placeholder="Repeat Password" />
        )}
      </Wrapper>
      {title === "Login" ? (
        <Button text="Login to your account" />
      ) : (
        <Button text="Create an account" />
      )}
      <CreateContainer>
        <Warning>{warning}</Warning>
        <AuthButton onClick={handleShowAuth}>{authButtonText}</AuthButton>
      </CreateContainer>
    </Container>
  );
}

export default Authorization;

const Container = styled.div`
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
