import styled from "styled-components";

function Button({ text }: { text: string }) {
  return <GlobalButton>{text}</GlobalButton>;
}

export default Button;

const GlobalButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: var(--red-color);
  border: none;
  border-radius: 6px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  color: var(--white-color);
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: var(--white-color);
    color: var(--semi-dark-blue);
  }
`;
