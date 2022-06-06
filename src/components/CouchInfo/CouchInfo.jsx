import { Link } from "react-router-dom"
import { Card, CouchItem, CouchStats, CouchContent, Actions, CouchProfile, IconActions } from "./CouchInfo.style"
import UserProfileImage from "assets/outer-pages/png/user.jpg"
import CouchIcon from "assets/outer-pages/svg/Abnehmen-Icon.svg"
import InstagramIcon from "assets/outer-pages/svg/Instagram-Icon.svg"
import MailIcon from "assets/outer-pages/svg/Mail-Icon.svg"
import ShareIcon from "assets/outer-pages/svg/Share-Icon.svg"

const CouchInfo = () => {
  return (
    <Card className="d-flex">
      <CouchContent>
        <h2 className="mt-0">Sarah Ostwald</h2>
        <small>25 Jahre</small>
        <CouchItem className="d-flex align-items-center">
          <img src={CouchIcon} alt="user" />
          <div>
            <small>Coach für</small>
            <p className="mb-0">Abnehmen & Muskelaufbau</p>
          </div>
        </CouchItem>
        <CouchStats className="d-grid">
          <div className="d-flex flex-column">
            <small>Spezialgebiet</small>
            <p className="mb-0">Bodybuilding</p>
          </div>
          <div className="d-flex flex-column">
            <small>Ausbildung</small>
            <p className="mb-0">3 Lizenzen</p>
          </div>
          <div className="d-flex flex-column">
            <small>Erfahrung</small>
            <p className="mb-0">4 Jahre</p>
          </div>
          <div className="d-flex flex-column">
            <small>Praxiserfahrung</small>
            <p className="mb-0">ja</p>
          </div>
        </CouchStats>
        <Actions className="d-flex flex-wrap gap-3">
          <button className="btn-primary">
            Erstgespräch vereinbaren
          </button>
          <button className="btn-outline">Coach-Profil ansehen</button>
        </Actions>
      </CouchContent>
      <CouchProfile className="d-flex flex-column">
        <div className="d-flex flex-column align-items-center gap-3">
          <img src={UserProfileImage} alt="user" />
          <IconActions className="d-flex align-items-center gap-3">
            <img src={InstagramIcon} alt="user" />
            <img src={MailIcon} alt="user" />
            <img src={ShareIcon} alt="user" />
          </IconActions>
        </div>
      </CouchProfile>
    </Card>
  )
}

export default CouchInfo
