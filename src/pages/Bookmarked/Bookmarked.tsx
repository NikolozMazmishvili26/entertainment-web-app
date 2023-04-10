import { useState } from "react";
import styled from "styled-components";
import data from "../../../data.json";

// import components
import { Search, Content } from "../../components";
import { dataProps } from "../../components/Home/Trending";

function Bookmarked() {
  //
  const [isSearching, setIsSearching] = useState(false);
  const [movies, setMovies] = useState<dataProps[]>(data);

  const bookmarkedData = movies.filter((movie) => movie.isBookmarked);

  const bookmarkedMovies = movies.filter(
    (movie) => movie.category === "Movie" && movie.isBookmarked
  );

  const bookmarkedTvSeries = movies.filter(
    (movie) => movie.category === "TV Series" && movie.isBookmarked
  );

  return (
    <Container>
      {/* Search Component */}
      <Search
        placeholder="Search for bookmarked shows"
        data={bookmarkedData}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
      />
      {/*  */}
      {!isSearching && (
        <>
          <Content title="Bookmarked Movies" data={bookmarkedMovies} />
          <Content title="Bookmarked TV Series" data={bookmarkedTvSeries} />
        </>
      )}
    </Container>
  );
}

export default Bookmarked;

const Container = styled.div`
  width: 100%;
  padding: 24px 16px 61px 16px;
  @media screen and (min-width: 768px) {
    padding: 33px 24px 56px 24px;
  }
`;
