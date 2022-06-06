import styled from "styled-components";

const Section = styled.section.attrs({
  className: `${(props) => props.className}`,
})`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: left;
  margin-block: 3rem;
  display: flex;
  gap: 2rem;
  position: relative;

  @media (max-width: 991.99px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.section.attrs({
  className: `${(props) => props.className}`,
})`
  display: flex;
  gap: 2rem;

  @media (max-width: 991.99px) {
    flex-direction: column;
  }
`;

const Background = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  width: -webkit-fill-available;
  height: 24rem;
  position: absolute;
  top: -2rem;
  z-index: -1;

  @media (max-width: 991.99px) {
    height: 24rem;
    top: -2rem;
  }
`;

const VisualContent = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  img {
    object-fit: cover;
    width: 15rem;
    height: 20rem;
    border-radius: 0.4rem;
  }

  @media (max-width: 991.99px) {
  }
`;

const TextContent = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  padding-top: 1.5rem;
  h3 {
    color: #142c1f;
    font-weight: 400;
    font-size: 1.5rem;
    strong {
      font-weight: 700;
    }
  }

  p {
    margin-block: 1.3rem;
    font-size: 0.9rem;
    color: #44554c;
  }

  button {
    width: 200px;
  }

  @media (max-width: 991.99px) {
    width: 100%;
  }
`;

export { Section, TextContent, VisualContent, Background, Wrapper };
