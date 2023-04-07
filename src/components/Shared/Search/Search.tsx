import styled from "styled-components";

// import assets
import { iconSearch } from "../../../../public/assets";

function Search({ placeholder }: { placeholder: string }) {
  return (
    <Container>
      <Image src={iconSearch} alt="search" />
      <SearchInput type="text" placeholder={placeholder} />
    </Container>
  );
}

export default Search;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const Image = styled.img`
  cursor: pointer;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  outline: none;
  color: var(--white-color);

  &::placeholder {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: var(--white-color);
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  @media screen and (min-width: 1110px) {
    width: 321px;
  }
`;
