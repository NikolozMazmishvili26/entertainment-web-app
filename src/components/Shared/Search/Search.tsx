import { useState } from "react";
import styled from "styled-components";

// import assets
import { iconSearch } from "../../../../public/assets";
import { dataProps } from "../../Home/Trending";

// import component
import { Content } from "../../../components";

function Search({
  placeholder,
  data,
  setIsSearching,
  isSearching,
}: {
  placeholder: string;
  data: dataProps[];
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  isSearching: boolean;
}) {
  //
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<dataProps[]>([]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // filter the data array based on the search term
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // set the filtered data in the state
    setFilteredData(filteredData);
    // setData(filteredData);

    if (searchTerm.length > 0) {
      setIsSearching(true);
    } else if (searchTerm.length === 0) {
      setIsSearching(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <SubmitButton type="submit">
          <Image src={iconSearch} alt="search" />
        </SubmitButton>
        <SearchInput
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
      {/*  */}
      {isSearching && (
        <Content
          data={filteredData}
          title={`Found ${filteredData.length} results for ‘${searchTerm}’`}
        />
      )}
    </Container>
  );
}

export default Search;

const Container = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const Image = styled.img`
  position: absolute;
  cursor: pointer;
  z-index: -1;
`;

const SubmitButton = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: auto;
  height: auto;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  outline: none;
  color: var(--white-color);
  font-size: 16px;
  line-height: 20px;

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
    font-size: 24px;
    line-height: 30px;
  }
`;
