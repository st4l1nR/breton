import styled from "styled-components"

const TestimonialHeader = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  position: relative;

  h2 {
    color: #142C1F;
    font-weight: 400;
    margin-left: 16px;

    strong {
      color: #1C9D87;
    }
  }

  img {
    width: 15rem;
    height: 15rem;
    object-fit: contain;
    z-index: 99;
    transform: translate(0, -50%);
    position: absolute;
    right: 0;
    top: 0;

    @media(max-width: 767px) {
      display: none;
    }
  }
`

const SliderCard = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  margin-top: 10rem;
`

const SliderItemCard = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  padding: 1.5rem;
  margin: 1rem;
  background: #f8f8f8;
  border-radius: 8px;
  height: 290px;

  @media (max-width: 991.99px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    gap: 4rem;
  }
`

const UserContent = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  h2 {
    color: #142c1f;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  small {
    color: #a5b5af;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`

const UserDescription = styled.p.attrs({
  className: `${(props) => props.className}`,
})`
  color: #44554c;
  font-size: 0.85rem;
  line-height: 1.1rem;
`

const RatingStars = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  gap: 0.2rem;
  margin-bottom: 0.46rem;
`

const Actions = styled.div.attrs({
  className: `${(props) => props.className}`,
})`
  margin-top: 6rem;
`

const LeftQouteImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.6rem;
`

export {
  SliderCard,
  SliderItemCard,
  UserContent,
  UserDescription,
  RatingStars,
  Actions,
  LeftQouteImage,
  TestimonialHeader
}
