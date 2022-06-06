import styled from "styled-components";

const Section = styled.section.attrs({
  className: `${(props) => props.className}`,
})`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  margin-top: -15rem;
  margin-bottom: -19rem;
  gap: 2rem;
  padding: 300px 0;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }

  .sub-heading {
    font-size: 0.9rem;
    color: #44554c;
  }

  @media (max-width: 991.99px) {
  }
`;

const Card = styled.section.attrs({
  className: `${(props) => props.className}`,
})`
  text-align: center;
  box-shadow: 0px 0px 40px #142c1f14;
  border-radius: 0.4rem;
  padding: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
    margin-top: -4rem;
  }

  h6 {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    margin-top: 2rem;
    color: #142c1f;
  }

  p {
    font-size: 0.85rem;
    color: #44554c;
  }

  @media (max-width: 991.99px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  gap: 2rem;

  img.device {
    max-width: 25rem;
    width: 100%;
  }

  @media (max-width: 991.99px) {
    flex-direction: column;
    gap: 3rem;
    img.device {
      margin-top: 2rem;
      margin-inline: auto;
    }
  }
`;

const Services = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  grid-template-columns: 1fr 1fr;

  .service {
    gap: 1rem;
    img {
      width: 3rem;
      height: 3rem;
      object-fit: contain;
    }

    div {
      h6 {
        font-size: 1rem;
        margin: 0 0 0.6rem 0;
        color: #142c1f;
      }

      p {
        font-size: 0.8rem;
        line-height: 1.2rem;
        color: #44554c;
        opacity: 0.7;
      }
    }
  }

  @media (min-width: 992px) {
    padding-top: 4rem;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) and (max-width: 991.99px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export { Section, Wrapper, Card, Services };
