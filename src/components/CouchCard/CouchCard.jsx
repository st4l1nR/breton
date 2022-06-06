import { Link } from "react-router-dom"
import { Card, CouchItem, CouchStats } from "./CouchCard.style"
import WhiteLogo from "assets/outer-pages/svg/Foodiary-logo.svg"
import NavbarBg from "assets/outer-pages/svg/Head-Foodiary-Coach-finden.svg"
import UserProfileImage from "assets/outer-pages/png/user.jpg"

const CouchCard = () => {
  return (
    <Card className="text-center">
      <img src={UserProfileImage} alt="" />
      <h3>Yasmin Olesch</h3>
      <CouchItem className="text-center">
        <small>Coach für</small>
        <p className="mb-0">Abnehmen & Muskelaufbau</p>
      </CouchItem>
      <CouchStats className="d-flex flex-wrap">
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
      <button className="btn-outline w-100 btn-medium">Mehr erfahren</button>
    </Card>
  )
}

export default CouchCard
