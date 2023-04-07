import styled from "styled-components";
import { dataProps } from "./Trending";

// import assets
import {
  emptyBookmark,
  fullBookmark,
  categoryMovie,
  categoryTv,
} from "../../../public/assets";

interface recomendedProps {
  recomended: dataProps;
}

function Recomended({ recomended }: recomendedProps) {
  //
  const { category, isBookmarked, isTrending, rating, thumbnail, title, year } =
    recomended;

  //

  const images = {
    mobile: thumbnail.regular.small,
    tablet: thumbnail.regular.medium,
    desktop: thumbnail.regular.large,
  };

  return (
    <RecomendedContainer>
      <Image images={images}>
        <BoomarkBox>
          <img
            src={isBookmarked ? fullBookmark : emptyBookmark}
            alt="bookmarked"
          />
        </BoomarkBox>
      </Image>
      {/* description */}
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
    </RecomendedContainer>
  );
}

export default Recomended;

const RecomendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const Image = styled.div<{
  images: { mobile: string; tablet: string; desktop: string };
}>`
  position: relative;
  background-image: url(${(props) => props.images.mobile});
  background-size: cover;
  background-position: center;
  height: 110px;
  border-radius: 8px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: 140px;
  }
`;

const BoomarkBox = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(16, 20, 30, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// description

const Description = styled.div`
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
  font-size: 11px;
  line-height: 14px;
  color: var(--white-color);
  mix-blend-mode: normal;
  opacity: 0.75;
  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 16px;
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
  font-size: 11px;
  line-height: 14px;
  color: var(--white-color);
  mix-blend-mode: normal;
  opacity: 0.75;
  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 16px;
  }
`;

const Rating = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 14px;
  color: var(--white-color);
  mix-blend-mode: normal;
  opacity: 0.75;
  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 16px;
  }
`;

// bottom description

const Bottom = styled.div``;

const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
`;