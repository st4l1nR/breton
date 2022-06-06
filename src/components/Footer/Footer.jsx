import { Link } from "react-router-dom"
import {
  FooterWrapper,
  Wrapper,
  TopSection,
  BottomSection,
  Links,
  VerticalLinks,
  MobileActions,
  TopSectionContent,
} from "./Footer.style"
import TopBg from "assets/outer-pages/svg/Foodiary-Footer-Background-Part1.svg"
import BottomBg from "assets/outer-pages/svg/Foodiary-Footer-Background-Part2.svg"
import WhiteLogo from "assets/outer-pages/svg/Foodiary-logo.svg"
import WhiteAppleLogo from "assets/outer-pages/png/white-apple-logo.png"
import PlayStoreLogo from "assets/outer-pages/png/google-play-store.jpg"
import FooterBg from "assets/outer-pages/svg/Footer-Foodiary.svg"

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <TopSection background={TopBg}>
          <div className="container">
            <TopSectionContent className="d-flex justify-content-between flex-wrap gap-3 w-100">
              <div>
                <img
                  src={
                    "https://foodiary.coach/wp-content/uploads/2021/06/Foodiary-Logo.png"
                  }
                  alt=""
                />
              </div>
              <div className="d-flex justify-content-between gap-4">
                <VerticalLinks>
                  <h6 className="mt-0">Freebies</h6>
                  <ul>
                    <li>
                      <Link to="#">Ernährungsplaner</Link>
                    </li>
                    <li>
                      <Link to="#">Ernährungsberatung</Link>
                    </li>
                    <li>
                      <Link to="#">Supplements</Link>
                    </li>
                    <li>
                      <Link to="#">Freebies</Link>
                    </li>
                    <li>
                      <Link to="#">Ernährungsguide</Link>
                    </li>
                    <li>
                      <Link to="#">Rezeptrechner</Link>
                    </li>
                    <li>
                      <Link to="#">Kalorienrechner</Link>
                    </li>
                  </ul>
                </VerticalLinks>
                <VerticalLinks>
                  <h6 className="mt-0">Company</h6>
                  <ul>
                    <li>
                      <Link to="#">Franchisesystem</Link>
                    </li>
                    <li>
                      <Link to="#">Für Sportanlagen</Link>
                    </li>
                    <li>
                      <Link to="#">Affiliate Programm</Link>
                    </li>
                    <li>
                      <Link to="#">Jobs</Link>
                    </li>
                    <li>
                      <Link to="#">Coach werden</Link>
                    </li>
                    <li>
                      <Link to="#">App Feedback</Link>
                    </li>
                    <li>
                      <Link to="#">Presse</Link>
                    </li>
                  </ul>
                </VerticalLinks>
                <VerticalLinks>
                  <h6 className="mt-0">Company</h6>
                  <ul>
                    <li>
                      <Link to="#">Instagram</Link>
                    </li>
                    <li>
                      <Link to="#">Pinterest</Link>
                    </li>
                    <li>
                      <Link to="#">Magazin</Link>
                    </li>
                    <li>
                      <Link to="#">Facebook-Gruppe</Link>
                    </li>
                    <li>
                      <Link to="#">Coach Cockpit</Link>
                    </li>
                  </ul>
                </VerticalLinks>
              </div>
              <MobileActions className="d-flex flex-wrap gap-3">
                <div>
                  <button className="btn-ios d-flex align-items-center">
                    <img src={WhiteAppleLogo} alt="" />
                    <div>
                      <small>Laden im</small>
                      <p className="my-0">App Store</p>
                    </div>
                  </button>
                </div>
                <div>
                  <button className="btn-android d-flex align-items-center">
                    <img src={PlayStoreLogo} alt="" />
                    <div>
                      <small>JETZT BEI</small>
                      <p className="my-0">Google Play</p>
                    </div>
                  </button>
                </div>
              </MobileActions>
            </TopSectionContent>
          </div>
        </TopSection>
        <BottomSection className="text-center" background={BottomBg}>
          <div>
            <Links>
              <li>
                <Link to="#">Impressum</Link>
              </li>
              <li>
                <Link to="#">Datenschutz</Link>
              </li>
              <li>
                <Link to="#">AGB</Link>
              </li>
            </Links>
            <p className="mb-0">
              © 2022 All Rights Reserved. <br /> Apple and the Apple logo are
              trademarks of Apple Inc., registered in the U.S. and other
              countries. Mac App Store is a service mark of Apple Inc. Google
              Play and the Google Play logo are trademarks of Google Inc.
            </p>
          </div>
        </BottomSection>
      </Wrapper>
    </FooterWrapper>
  )
}

export default Footer
