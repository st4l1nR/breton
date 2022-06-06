import { Link } from "react-router-dom"
import { ArrowRightCircle, ArrowLeftCircle, Star } from "react-feather"
import Slider from "react-slick"
import {
  SliderCard,
  SliderItemCard,
  UserContent,
  UserDescription,
  RatingStars,
  Actions,
  LeftQouteImage,
  TestimonialHeader
} from "./ClientsTestimonials.style"
import LeftQoute from "assets/outer-pages/svg/Icon-awesome-quote-left.svg"
import ReviewsWomen from "assets/outer-pages/svg/reviews-women.svg"

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <ArrowRightCircle
      className={className}
      style={{ ...style }}
      onClick={onClick}
      strokeWidth={1.5}
    />
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <ArrowLeftCircle
      className={className}
      style={{ ...style }}
      onClick={onClick}
      strokeWidth={1.5}
    />
  )
}

const ClientsTestimonials = () => {
  const settings = {
    className: "",
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow className="disabled" />,
    prevArrow: <PrevArrow className="disabled" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }

  return (
    <>
      <SliderCard className="testimonial-slider">
        <TestimonialHeader>
          <h2>
            Das sagen unsere <strong>Coaching Klienten</strong>
          </h2>
          <img src={ReviewsWomen} alt="" />
        </TestimonialHeader>
        <Slider className="slick-slider" {...settings}>
          <div className="slick-item">
            <SliderItemCard className="">
              <UserContent className="d-flex flex-column justify-content-between h-100">
                <div>
                  <LeftQouteImage src={LeftQoute} alt="" />
                  <UserDescription className="my-0">
                    Zum einen funktioniert die App reibungslos und sauber, ist
                    einfach zu verstehen und daher trotz den vielen Features
                    easy zu bedienen. Zum anderen schafft man es mit diesem
                    Konzept wirklich mal seine Ziele zu erreichen was meiner
                    Meinung nach das Wichtigste ist.
                  </UserDescription>
                </div>
                <div>
                  <RatingStars className="d-flex">
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                  </RatingStars>
                  <strong>denise2709</strong>
                </div>
              </UserContent>
            </SliderItemCard>
          </div>
          <div className="slick-item">
            <SliderItemCard className="">
              <UserContent className="d-flex flex-column justify-content-between h-100">
                <div>
                  <LeftQouteImage src={LeftQoute} alt="" />
                  <UserDescription className="my-0">
                    Zum einen funktioniert die App reibungslos und sauber, ist
                    einfach zu verstehen und daher trotz den vielen Features
                    easy zu bedienen. Zum anderen schafft man es mit diesem
                    Konzept wirklich mal seine Ziele zu erreichen was meiner
                    Meinung nach das Wichtigste ist.
                  </UserDescription>
                </div>
                <div>
                  <RatingStars className="d-flex">
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                  </RatingStars>
                  <strong>denise2709</strong>
                </div>
              </UserContent>
            </SliderItemCard>
          </div>
          <div className="slick-item">
            <SliderItemCard className="">
              <UserContent className="d-flex flex-column justify-content-between h-100">
                <div>
                  <LeftQouteImage src={LeftQoute} alt="" />
                  <UserDescription className="my-0">
                    Zum einen funktioniert die App reibungslos und sauber, ist
                    einfach zu verstehen und daher trotz den vielen Features
                    easy zu bedienen. Zum anderen schafft man es mit diesem
                    Konzept wirklich mal seine Ziele zu erreichen was meiner
                    Meinung nach das Wichtigste ist.
                  </UserDescription>
                </div>
                <div>
                  <RatingStars className="d-flex">
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                  </RatingStars>
                  <strong>denise2709</strong>
                </div>
              </UserContent>
            </SliderItemCard>
          </div>
          <div className="slick-item">
            <SliderItemCard className="">
              <UserContent className="d-flex flex-column justify-content-between h-100">
                <div>
                  <LeftQouteImage src={LeftQoute} alt="" />
                  <UserDescription className="my-0">
                    Zum einen funktioniert die App reibungslos und sauber, ist
                    einfach zu verstehen und daher trotz den vielen Features
                    easy zu bedienen. Zum anderen schafft man es mit diesem
                    Konzept wirklich mal seine Ziele zu erreichen was meiner
                    Meinung nach das Wichtigste ist.
                  </UserDescription>
                </div>
                <div>
                  <RatingStars className="d-flex">
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                    <Star fill="#FFBB00" stroke="#FFBB00" />
                  </RatingStars>
                  <strong>denise2709</strong>
                </div>
              </UserContent>
            </SliderItemCard>
          </div>
        </Slider>
        <Actions className="text-center">
          <button className="btn-outline btn-medium">
            Jetzt dein kostenloses Erstgespräch vereinbaren
          </button>
        </Actions>
      </SliderCard>
    </>
  )
}

export default ClientsTestimonials
