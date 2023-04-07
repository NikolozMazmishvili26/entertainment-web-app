import styled from "styled-components";
import { dataProps } from "./Trending";

// import assets
import {
  fullBookmark,
  emptyBookmark,
  categoryMovie,
  categoryTv,
} from "../../../public/assets";

interface trendProps {
  trending: dataProps;
}

function Trend({ trending }: trendProps) {
  // trending destructurization
  const { category, isBookmarked, isTrending, rating, thumbnail, title, year } =
    trending;

  //

  const images = {
    small: thumbnail.trending?.small,
    large: thumbnail.trending?.large,
  };

  return (
    <Card images={images}>
      <BookmarkBox>
        <BookmarkImage
          src={isBookmarked ? fullBookmark : emptyBookmark}
          alt="bookmarked"
        />
      </BookmarkBox>
      {/*  */}

      <Description>
        <Top>
          <Year>{year}</Year>
          <Dot />
          <MovieCategory>
            <CategoryImage
              src={category === "Movie" ? categoryMovie : categoryTv}
              alt={category}
            />
            <CategoryTitle>{category}</CategoryTitle>
          </MovieCategory>
          <Dot />
          <Rating>{rating}</Rating>
        </Top>
        <Bottom>
          <Title>{title}</Title>
        </Bottom>
      </Description>
    </Card>
  );
}

export default Trend;

const Card = styled.div<{
  images: {
    small: string | undefined;
    large: string | undefined;
  };
}>`
  position: relative;
  background-image: url(${(props) => props.images.small});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 140px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    background-image: url(${(props) => props.images.large});
    height: 230px;
  }
`;

const BookmarkBox = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(16, 20, 30, 0.5);
  mix-blend-mode: normal;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    top: 16px;
    right: 24px;
  }
`;

const BookmarkImage = styled.img``;

const DescriptionWrapper = styled.div`
  margin-left: 16px;
  margin-bottom: 16px;
`;

const Description = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

// top description

const Top = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const Year = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: var(--white-color);
  mix-blend-mode: normal;
  opacity: 0.75;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--white-color);
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const MovieCategory = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`;

const CategoryImage = styled.img``;

const CategoryTitle = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: var(--white-color);
  mix-blend-mode: normal;
  opacity: 0.75;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const Rating = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: var(--white-color);
  mix-blend-mode: normal;
  opacity: 0.75;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

// bottom description

const Bottom = styled.div``;

const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
`;
