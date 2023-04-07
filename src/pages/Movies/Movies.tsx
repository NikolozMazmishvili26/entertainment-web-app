import { useState } from "react";
import styled from "styled-components";
import data from "../../../data.json";

// import components
import { Search, Content } from "../../components";
import { dataProps } from "../../components/Home/Trending";

function Movies() {
  //
  const [movies, setMovies] = useState<dataProps[]>(data);
  const onlyMovies = movies.filter((movie) => movie.category === "Movie");

  return (
    <Container>
      {/* Search Component */}
      <Search placeholder="Search for movies" />
      {/*  */}
      <Content title="Movies" data={onlyMovies} />
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  width: 100%;
  padding: 24px 16px 61px 16px;
  @media screen and (min-width: 768px) {
    padding: 33px 24px 56px 24px;
  }
`;
