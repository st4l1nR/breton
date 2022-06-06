import styled from "styled-components"

const Card = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  margin-top: -18rem;
  margin-bottom: 5rem;

  @media(max-width: 991.99px) {
    flex-direction: column-reverse;
  }
`

const CouchProfile = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  width: 50%;
  align-items: end;
    img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    border: 6px solid white;
    box-shadow: 0px 0px 17px #d6d6d6a2;
  }

  @media(max-width: 991.99px) {
    width: 100%;
    align-items: center;
  }

  @media(max-width: 767px) {
    img {
      width: 250px;
      height: 250px;
    }
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
    width: 1.5rem !important;
    height: 1.5rem !important;
    border-radius: 0 !important;
    object-fit: contain !important;
    cursor: pointer;
    box-shadow: none !important;

    &:nth-child(odd) {
      height: 1.34rem;
    }
  }
`

const CouchContent = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  padding-top: 3rem;
  width: 50%;
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

  @media(max-width: 991.99px) {
    width: 100%;
  }
`

const CouchStats = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0px 0px 40px #142C1F14;
  word-break: break-all;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  div {
    border-right: 1px solid #eeeeee;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    small {
      color: #A5B5AF;
      font-size: .8rem;
      line-height: .8rem;
    }

    p {
      margin-top: .3rem;
      color: #44554C;
      font-size: .9rem;
      line-height: 1rem;
      font-weight: 600;
    }

    &:last-child {
      border-right: none;
    }
  }

  @media(max-width: 600px) {
    grid-template-columns: 1fr 1fr;

   div {
    &:first-child, &:nth-child(2) {
      border-bottom: 1px solid #eeeeee;
    }

    &:nth-child(2) {
      border-right: none;
    }
   }
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

const Actions = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  
  @media(max-width: 600px) {
    flex-direction: column;
  }
`


export {
  Card, CouchStats,
  CouchContent,
  CouchItem,
  Actions,
  CouchProfile,
  IconActions
}
