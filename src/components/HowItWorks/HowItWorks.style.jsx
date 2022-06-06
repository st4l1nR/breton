import styled from "styled-components";

const Section = styled.section.attrs({
  className: `${(props) => props.className}`,
})`
  margin-top: 5rem;
  margin-bottom: 3rem;
  gap: 2rem;

  h2 {
    margin-bottom: 4rem;
    font-size: 1.6rem;
  }

  @media (max-width: 991.99px) {
  }
`;

const Card = styled.section.attrs({
  className: `${(props) => props.className}`,
})`
  text-align: center;
  box-shadow: 0px 0px 40px #142C1F14;
  border-radius: .4rem;
  padding: 1.5rem;
  background-color: white;

  img {
    width: 5rem;
    height: 5rem;
    margin-top: -4rem;
  }

  h6 {
    font-size: 1.2rem;
    margin-bottom: .6rem;
    margin-top: 2rem;
    color: #142C1F;
  }

  p {
    font-size: .85rem;
    color: #44554C;
  }

  @media (max-width: 991.99px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 991.99px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
`;

export { Section, Wrapper, Card };
