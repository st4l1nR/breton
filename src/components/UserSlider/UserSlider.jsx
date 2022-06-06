import { Link } from "react-router-dom"
import { ArrowRightCircle, ArrowLeftCircle } from "react-feather"
import Slider from "react-slick"
import {
  SliderCard,
  SliderItemCard,
  UserProfile,
  IconActions,
  UserContent,
  UserDescription,
  CouchItem,
  Actions
} from "./UserSlider.style"
import CouchIcon from "assets/outer-pages/svg/Abnehmen-Icon.svg"
import InstagramIcon from "assets/outer-pages/svg/Instagram-Icon.svg"
import MailIcon from "assets/outer-pages/svg/Mail-Icon.svg"
import ShareIcon from "assets/outer-pages/svg/Share-Icon.svg"
import UserProfileImage from "assets/outer-pages/png/user.jpg"

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <ArrowRightCircle
      className={className}
      style={{ ...style }}
      onClick={onClick}
      strokeWidth={2}
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
      strokeWidth={2}
    />
  )
}

const UserSlider = () => {
  const settings = {
    className: "",
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NextArrow className="disabled"/>,
    prevArrow: <PrevArrow className="disabled"/>,
  }

  return (
    <>
      <SliderCard className="user-slider">
        <Slider className="slick-slider" {...settings}>
          <div className="slick-item">
            <SliderItemCard className="d-flex gap-5">
              <UserProfile className="d-flex flex-column align-items-center gap-3">
                <img src={UserProfileImage} alt="user" />
                <IconActions className="d-flex align-items-center gap-3">
                  <img src={InstagramIcon} alt="user" />
                  <img src={MailIcon} alt="user" />
                  <img src={ShareIcon} alt="user" />
                </IconActions>
              </UserProfile>
              <UserContent>
                <h2 className="mt-0">Sarah Ostwald</h2>
                <small>25 Jahre</small>
                <CouchItem className="d-flex align-items-center">
                  <img src={CouchIcon} alt="user" />
                  <div>
                    <small>Coach für</small>
                    <p className="mb-0">Abnehmen & Muskelaufbau</p>
                  </div>
                </CouchItem>
                <UserDescription>
                  "Mein Name ist Sarah und seit über 10 Jahren bin ich
                  leidenschaftlicher Sportler und Ernährungbserater. Ich arbeite
                  gern mit Foodiary und betreue gern meine Klienten bei der
                  Ernährungsumstellung."
                </UserDescription>
                <Actions className="d-flex flex-wrap gap-3">
                  <button className="btn-primary">
                    Erstgespräch vereinbaren
                  </button>
                  <button className="btn-outline">Coach-Profil ansehen</button>
                </Actions>
              </UserContent>
            </SliderItemCard>
          </div>
          <div className="slick-item">
            <SliderItemCard className="d-flex gap-5">
              <UserProfile className="d-flex flex-column align-items-center gap-3">
                <img src={UserProfileImage} alt="user" />
                <IconActions className="d-flex align-items-center gap-3">
                  <img src={InstagramIcon} alt="user" />
                  <img src={MailIcon} alt="user" />
                  <img src={ShareIcon} alt="user" />
                </IconActions>
              </UserProfile>
              <UserContent>
                <h2 className="mt-0">Sarah Ostwald</h2>
                <small>25 Jahre</small>
                <CouchItem className="d-flex align-items-center">
                  <img src={CouchIcon} alt="user" />
                  <div>
                    <small>Coach für</small>
                    <p className="mb-0">Abnehmen & Muskelaufbau</p>
                  </div>
                </CouchItem>
                <UserDescription>
                  "Mein Name ist Sarah und seit über 10 Jahren bin ich
                  leidenschaftlicher Sportler und Ernährungbserater. Ich arbeite
                  gern mit Foodiary und betreue gern meine Klienten bei der
                  Ernährungsumstellung."
                </UserDescription>
                <div className="d-flex gap-3">
                  <button className="btn-primary">
                    Erstgespräch vereinbaren
                  </button>
                  <button className="btn-outline">Coach-Profil ansehen</button>
                </div>
              </UserContent>
            </SliderItemCard>
          </div>
        </Slider>
      </SliderCard>
    </>
  )
}

export default UserSlider
