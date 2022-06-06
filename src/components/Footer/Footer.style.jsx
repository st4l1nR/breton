import styled from "styled-components"

const FooterWrapper = styled.div`
  /* background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%; */
`

const TopSection = styled.div`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 150px;
  img {
    width: 10rem;
    margin-top: 4rem;
  }

  @media (max-width: 991.99px) {
    padding-top: 30px;
    padding-bottom: 320px;
    img {
      margin-bottom: 2rem;
      margin-inline: auto;
      display: block;
    }
  }
`

const TopSectionContent = styled.div`
  @media (max-width: 991.99px) {
    flex-direction: column;
  }
`

const BottomSection = styled.div`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  width: 100%;

  > div {
    color: white;
    max-width: 750px;
    margin: -100px auto auto auto;
    padding: 130px 20px 80px 20px;

    p {
      font-size: 0.9rem;
      line-height: 1.2rem;
    }
  }

  @media (max-width: 991.99px) {
    margin: -280px auto auto auto;
  }

  @media (max-width: 600px) {
    > div {
      padding: 100px 20px 40px 20px;
    }
  }
`

const Wrapper = styled.div`
  position: relative;
  padding-top: 1.3rem;
  @media (max-width: 700px) {
    padding-top: 5rem;
  }
`

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
      font-size: 1rem;
    }
  }
`

const VerticalLinks = styled.div`
  h6 {
    color: #142c1f;
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    width: fit-content;

    li {
      padding: 0 0 0.5rem 0;
      word-break: break-all;
      a {
        color: #44554c;
        opacity: 0.7;
        text-decoration: none;
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 600px) {
    h6 {
      font-size: 1rem;
    }

    li {
      a {
        font-size: 0.4rem;
      }
    }
  }
`

const MobileActions = styled.div`
  max-width: 353px;
  padding-top: 60px;

  @media (max-width: 991.99px) {
    padding-top: 0;
    margin-inline: auto;
    justify-content: center;
  }
`

export {
  FooterWrapper,
  Links,
  Wrapper,
  BottomSection,
  TopSection,
  VerticalLinks,
  MobileActions,
  TopSectionContent,
}
