import { useState } from "react";
import styled from "styled-components";
import data from "../../../data.json";

// import components
import { Search, Content } from "../../components";
import { dataProps } from "../../components/Home/Trending";

function TV() {
  //
  const [tvSeries, setTvSeries] = useState<dataProps[]>(data);
  const onlyTv = tvSeries.filter((tvSerie) => tvSerie.category === "TV Series");

  return (
    <Container>
      {/* Search Component */}
      <Search placeholder="Search for TV series" />
      {/*  */}
      <Content title="TV Series" data={onlyTv} />
    </Container>
  );
}

export default TV;

const Container = styled.div`
  width: 100%;
  padding: 24px 16px 61px 16px;
  @media screen and (min-width: 768px) {
    padding: 33px 24px 56px 24px;
  }
`;
