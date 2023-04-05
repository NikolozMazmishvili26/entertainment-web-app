import styled from "styled-components";

// import assets
import { logo } from "../../public/assets";

function Header() {
  return (
    <MainHeader>
      <Logo src={logo} />
    </MainHeader>
  );
}

export default Header;

const MainHeader = styled.header``;

const Logo = styled.img``;
