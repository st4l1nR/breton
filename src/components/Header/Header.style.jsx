import styled from "styled-components"

const Navbar = styled.nav`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 180px;
  @media (max-width: 700px) {
    height: 250px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  padding-top: 1.3rem;
  @media (max-width: 700px) {
    padding-top: 5rem;
  }
`;

const Links = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: fit-content;

  li {
    padding: 1rem 1rem;
    display: inline-block;
    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`;

const Logo = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 8rem;
  position: absolute;
  left: 0;
  top: 60%;
  transform: translate(0, -50%);

  @media (max-width: 700px) {
    left: 50%;
    top: 30px;
    transform: translate(-50%, -15px);
  }
`;

const Container = styled.div`
  max-width: 90%;
  margin: auto;

  @media (min-width: 1400px) {
    // max-width: 1366px;
    max-width: 1140px;
  }

  @media (min-width: 1200px) and (max-width: 1399.99px) {
    max-width: 1140px;
  }

  @media (min-width: 992px) and (max-width: 1199.99px) {
    max-width: 960px;
  }
`

export { Navbar, Links, Logo, Container, Wrapper }
