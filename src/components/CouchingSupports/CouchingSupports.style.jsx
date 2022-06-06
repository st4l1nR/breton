import styled from "styled-components";

const Section = styled.section.attrs({
  className: `${(props) => props.className}`,
})`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  margin-block: 4rem;
  padding: 3rem 0;

  @media (max-width: 991.99px) {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  gap: 2rem;
  padding-top: 7rem;

  .left,
  .right {
    width: 50%;
  }

  .left {
    max-width: 500px;
    color: white;
    padding-top: 4rem;

    strong {
      color: black;
    }
  }

  @media (max-width: 991.99px) {
    padding-top: 4rem;
    flex-direction: column;
    gap: 3rem;
    .left,
    .right {
      width: 100%;
      margin-inline: auto;
    }
  }
`;

const Card = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  box-shadow: 0px 13px 20px #0000001a;
  border-radius: 0.4rem;
  background: white;
  overflow: hidden;
  max-width: 24rem;
  width: 100%;
  margin-inline: auto;

  @media (max-width: 991.99px) {
    flex-direction: column;
  }
`;

const CardHeader = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  background: #142c1f;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem;
`;

const CardBody = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  padding: 1rem;
  h2 {
    font-size: 1.3rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const CheckItem = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  padding: 0.7rem;
  border-radius: 0.2rem;
  gap: 1rem;

  &:nth-child(even) {
    background: #f5faf9;
  }

  svg {
    color: #2ecf96;
    min-width: 1.2rem;
    width: 1.2rem;
    height: 1.2rem;
  }
  p {
    font-size: 0.8rem;
    line-height: 0.9rem;
    color: #44554c;
  }
`;

export { Section, Wrapper, Card, CardHeader, CardBody, CheckItem };
