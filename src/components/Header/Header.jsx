import { Link } from "react-router-dom"
import { Navbar, Links, Logo, Container, Wrapper } from "./Header.style"
import WhiteLogo from "assets/outer-pages/svg/Foodiary-logo.svg"
import NavbarLargeBg from "assets/outer-pages/png/Foodiary-Head-Part2.png"
import NavbarSmallBg from "assets/outer-pages/png/Head-Foodiary.png"
// import NavbarBg from "assets/outer-pages/svg/Head-Foodiary-Coach-finden.svg";

const Header = ({ isBig }) => {
  const background = isBig ? NavbarLargeBg : NavbarSmallBg
  return (
    <Navbar background={background} className={ isBig ? "navbar-lg" : ""}>
      <Container>
        <Wrapper>
          <Logo src={WhiteLogo} />
          <Links>
            <li>
              <Link to="/">App</Link>
            </li>
            <li>
              <Link to="/couch">Coach</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </Links>
        </Wrapper>
      </Container>
    </Navbar>
  )
}

export default Header
