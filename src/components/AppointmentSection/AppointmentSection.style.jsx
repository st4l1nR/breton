import styled from "styled-components"

const Section = styled.section.attrs({
  className: `${(props) => props.className}`,
})`
  margin-block: 3rem;
  display: flex;

  @media (max-width: 991.99px) {
    flex-direction: column;
  }
`

const TextContent = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  width: 50%;
  padding-top: 12rem;
  padding-right: 2rem;
  h3 {
    color: #142c1f;
    font-weight: 400;
    font-size: 2rem;
    strong {
      font-weight: 700;
    }
  }

  p {
    margin-block: 1.3rem;
    font-size: 1rem;
    color: #44554c;
  }

  button {
    width: 230px;
  }

  @media (max-width: 991.99px) {
    padding-right: 0;
    width: 100%;
    padding-top: 13rem;
    text-align: center;
  }
`

const VisualContent = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  width: 50%;
  img {
    object-fit: contain;
    width: 100%;
    max-width: 550px;
    margin-left: auto;
    margin-top: 4%;
  }

  @media (max-width: 991.99px) {
    width: 100%;
    text-align: center;
    padding-top: 3rem;
  }
`

export { Section, TextContent, VisualContent }
