import styled from "styled-components";

// import components
import { Search, Trending, Recomendation } from "../../components";

function Home() {
  return (
    <Container>
      {/* Search Component */}
      <Search />
      {/* Trending Component */}
      <Trending />
      {/* Recomendation Component */}
      <Recomendation />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  padding: 24px 16px 61px 16px;
  @media screen and (min-width: 768px) {
    padding: 33px 24px 56px 24px;
  }
`;
