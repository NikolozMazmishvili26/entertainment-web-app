import styled from "styled-components";
import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormGetValues,
  FieldError,
  Merge,
  UseFormSetValue,
  FieldErrorsImpl,
} from "react-hook-form";

// import components
import { Button } from "../../components";
// import interface
import { userProps } from "../../App";

// interface
interface signUp {
  setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  setUser: React.Dispatch<React.SetStateAction<userProps[]>>;
  user: userProps[];
  setValue: UseFormSetValue<FieldValues>;
}

function SignUp({
  setShowSignUp,
  errors,
  handleSubmit,
  register,
  getValues,
  setUser,
  user,
  setValue,
}: signUp) {
  //
  const onSubmit = (data: any) => {
    setUser([...user, { email: data.email, password: data.password }]);
    setShowSignUp(false);
    setValue("email", "");
    setValue("password", "");
    setValue("repeatPassword", "");
  };

  const validateRepeatPassword = (value: string) => {
    const passwordValue = getValues("password");
    return passwordValue === value || "Passwords must match";
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign Up</Title>
      <Wrapper>
        <Input
          type="email"
          placeholder="Email address"
          {...register("email", {
            required: true,
            pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
          })}
          error={errors.email}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 1,
              message: "Password must be at least 8 characters",
            },
          })}
          error={errors.password}
        />
        <Input
          type="password"
          placeholder="Repeat Password"
          {...register("repeatPassword", {
            required: "Repeat password is required",
            validate: validateRepeatPassword,
          })}
          error={errors.repeatPassword}
        />
      </Wrapper>
      <Button text="Create an account" />
      <CreateContainer>
        <Warning>Already have an account?</Warning>
        <AuthButton type="button" onClick={() => setShowSignUp(false)}>
          Login
        </AuthButton>
      </CreateContainer>
    </Form>
  );
}

export default SignUp;

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

const Input = styled.input<{
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}>`
  font-family: "Outfit", sans-serif;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: ${(props) =>
    props.error ? "1px solid red" : "1px solid var(--greyish-blue)"};
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
