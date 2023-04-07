import styled from "styled-components";

// import assets
import {
  logo,
  navHome,
  navMovies,
  navTV,
  navBookmark,
  avatar,
} from "../../public/assets";

function Header() {
  return (
    <MainHeader>
      <Logo src={logo} alt="logo" />
      {/*  */}
      <HeaderNav>
        <NavList>
          <NavItem>
            <NavImage src={navHome} alt="home" />
          </NavItem>
          <NavItem>
            <NavImage src={navMovies} alt="movies" />
          </NavItem>
          <NavItem>
            <NavImage src={navTV} alt="TV" />
          </NavItem>
          <NavItem>
            <NavImage src={navBookmark} alt="bookmark" />
          </NavItem>
        </NavList>
      </HeaderNav>
      {/*  */}
      <Avatar src={avatar} alt="avatar" />
    </MainHeader>
  );
}

export default Header;

const MainHeader = styled.header`
  position: relative;
  background-color: var(--semi-dark-blue);
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    border-radius: 10px;
    padding: 24px;
  }
  @media screen and (min-width: 1110px) {
    flex-direction: column;
    height: 960px;
    border-radius: 20px;
    padding: 35px 28px 32px 28px;
    justify-content: start;
  }
`;

const Logo = styled.img`
  cursor: pointer;
`;

const HeaderNav = styled.nav`
  @media screen and (min-width: 1110px) {
    margin-top: 75px;
  }
`;

const NavList = styled.ul`
  display: flex;
  column-gap: 24px;
  cursor: pointer;
  @media screen and (min-width: 1110px) {
    flex-direction: column;
    row-gap: 40px;
    column-gap: 0px;
  }
`;

const NavItem = styled.li``;

const NavImage = styled.img``;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: 1110px) {
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 32px;
  }
`;
