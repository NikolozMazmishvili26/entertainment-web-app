import { useState } from "react";
import styled from "styled-components";
import data from "../../../data.json";

// import components
import { Search, Trending, Content } from "../../components";
import { dataProps } from "../../components/Home/Trending";

function Home() {
  //
  const [recomendation, setRecomendation] = useState<dataProps[]>(data);
  const dataWithoutTrending = recomendation.filter(
    (recomended) => !recomended.isTrending
  );
  return (
    <Container>
      {/* Search Component */}
      <Search placeholder="Search for movies or TV series" />
      {/* Trending Component */}
      <Trending />
      {/* Recomendation Component */}
      <Content title="Recommended for you" data={dataWithoutTrending} />
      {/* <Recomendation /> */}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  padding: 24px 16px 61px 16px;
  @media screen and (min-width: 768px) {
    padding: 33px 24px 56px 24px;
  }
`;
