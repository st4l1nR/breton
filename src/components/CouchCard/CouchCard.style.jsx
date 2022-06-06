import styled from "styled-components"

const Card = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  box-shadow: 0px 0px 17px #d6d6d6a2;
  padding: 1.5rem;
  border-radius: .4rem;
  background: white;

  h3 {
    font-weight: bold;
  }

  > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 6px solid #e5e5e540;
  }

  button {
    font-size: 1rem;
  }
`

const CouchItem = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  background: #F8F8F8;
  border-radius: 4px;
  padding: .6rem .9rem;
  widht: 100%;

  small {
    color: #A5B5AF;
    font-size: 1rem;
  }

  p {
    margin-top: .5rem;
    color: #1C9D87;
    font-size: 1rem;
    font-weight: bold;
  }
`

const CouchStats = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  div {
    width: calc(50% - 1px - 1rem);
    border-right: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    justify-content: center;
    align-items: center;
    padding: 1rem .5rem;

    small {
      color: #A5B5AF;
      font-size: .86rem;
    }
    p {
      margin-top: .3rem;
      color: #44554C;
      font-size: 1rem;
      font-weight: 600;
    }
    &:nth-child(2) {
      border-right: none;
    }
    &:nth-child(3) {
      border-bottom: none;
    }
    &:nth-child(4) {
      border-bottom: none;
      border-right: none;
    }
  }
`

export { Card, CouchItem, CouchStats }
