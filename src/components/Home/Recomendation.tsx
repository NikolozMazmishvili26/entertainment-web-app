import { useState } from "react";
import styled from "styled-components";
import data from "../../../data.json";

// import components
import { Recomended } from "../../components";
import { dataProps } from "./Trending";

function Recomendation() {
  //
  const [recomendation, setRecomendation] = useState<dataProps[]>(data);

  return (
    <Container>
      <Title>Recomended for you</Title>
      <Wrapper>
        {recomendation.map((recomended, Index) => {
          return <Recomended key={Index} recomended={recomended} />;
        })}
      </Wrapper>
    </Container>
  );
}

export default Recomendation;

const Container = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1110px) {
    row-gap: 32px;
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.3125px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 15px;
  row-gap: 16px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
    row-gap: 24px;
    column-gap: 29px;
  }
  @media screen and (min-width: 1110px) {
    grid-template-columns: repeat(5, auto);
    row-gap: 32px;
    column-gap: 40px;
  }
`;
