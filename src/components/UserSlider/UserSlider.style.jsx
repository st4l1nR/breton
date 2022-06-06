import styled from "styled-components"

const SliderCard = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  background: white;
  box-shadow: 0px 0px 50px #d6d6d6a2;
  border-radius: 8px;
  padding: 1.5rem 6rem;

  @media(max-width: 767px) {
    padding: 1rem;
  }

   @media(max-width: 600px) {
    padding: 0;
  }
`

const SliderItemCard = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  padding: 1.5rem;

  @media(max-width: 991.99px) {
    flex-direction: column;
  }

   @media(max-width: 600px) {
    gap: 4rem;
  }
`

const UserProfile = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 6px solid white;
    box-shadow: 0px 0px 17px #d6d6d6a2;
  }
`
const IconActions = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  box-shadow: 0px 0px 20px #d6d6d6a2;
  border-radius: 8px;
  padding: 1rem;
  width: fit-content;

  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0;
    object-fit: contain;
    cursor: pointer;

    &:nth-child(odd) {
      height: 1.34rem;
    }
  }
`

const UserContent = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  h2 {
    color: #142c1f;
    margin-bottom: .5rem;
    font-weight: 600;
  }

  small {
    color: #a5b5af;
    font-size: .9rem;
    margin-top: 0.5rem;
  }
`

const CouchItem = styled.div.attrs({
  className: `${(props) => props.className}`,
})`

  margin-top: 1rem;
  img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: contain;
  }

  div {
    small {
      color: #a5b5af;
      font-size: .9rem;
    }

    p {
      color: #142c1f;
      font-size: 1rem;
      font-weight: 500;
      margin-top: 0.23rem;
    }
  }
`

const UserDescription = styled.p.attrs({
  className: `${(props) => props.className}`,
})`
  color: #44554C;
  opacity: 0.7;
  font-style: italic;
  font-size: .95rem;
`

const Actions = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  
  @media(max-width: 600px) {
    flex-direction: column;
  }
`

export {
  SliderCard,
  SliderItemCard,
  IconActions,
  UserProfile,
  UserContent,
  UserDescription,
  CouchItem,
  Actions
}
