import { useState, useEffect } from "react";
import styled from "styled-components";

// import components
import { Trend } from "../../components";

//
export interface dataProps {
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
  rating: string;
  thumbnail: {
    regular: {
      large: string;
      medium: string;
      small: string;
    };
    trending?: {
      large: string;
      small: string;
    };
  };
  title: string;
  year: number;
}

function Trending({ data }: { data: dataProps[] }) {
  return (
    <Container>
      <Title>Trending</Title>
      <TrendingContainer>
        {data.map((trending, Index) => {
          return <Trend key={Index} trending={trending} />;
        })}
      </TrendingContainer>
    </Container>
  );
}

export default Trending;

const Container = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  max-width: 1700px;
  width: 100%;
  @media screen and (min-width: 768px) {
    row-gap: 25px;
    margin-top: 34px;
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
  }
`;

const TrendingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(240px, 1fr));
  column-gap: 16px;
  overflow-x: scroll;
  /* max-width: 1305px; */
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, minmax(470px, 1fr));
    column-gap: 40px;
    /* max-width: 2594px; */
  }
`;
