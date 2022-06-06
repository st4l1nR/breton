import { Section, Wrapper, Services } from "./CouchServices.style";
import Icon from "assets/outer-pages/svg/Icon-Ernährung-Foodiary-dark.svg";
import Device from "assets/outer-pages/png/Foodiary-Coaching-Software.png";
import Background from "assets/outer-pages/png/Foodiary-Background-Part2.png";

const CouchServices = () => {
  return (
    <Section background={Background}>
      <div className="container">
        <h2 className="text-center">
          <strong>Mit meinem Foodiary Coaching erhältst du</strong>
        </h2>
        <p className="sub-heading text-center">
          Ihre Mitglieder erhalten eine professionelle Ernährungsberatung mit
          persönlichem <br /> Ernährungsplan und uneingeschränktem Foodiary PRO
          Zugang.
        </p>
        <Wrapper className="wrapper d-flex">
          <img className="device" src={Device} alt="" />
          <Services className="services d-grid gap-3">
            <div className="service d-flex">
              <img src={Icon} alt="" />
              <div>
                <h6>
                  <strong>Persönliches Erstgespräch</strong>
                </h6>
                <p className="my-0">
                  Unser Coach erstellt gemeinsam mit Ihrem Mitglied einen
                  persönlichen Ernährungsplan.
                </p>
              </div>
            </div>
            <div className="service d-flex">
              <img src={Icon} alt="" />
              <div>
                <h6>
                  <strong>Persönlicher Ernährungsplan</strong>
                </h6>
                <p className="my-0">
                  Der Ernährungsplan wird nach der Erstellung ausführlich erklärt.
                </p>
              </div>
            </div>
            <div className="service d-flex">
              <img src={Icon} alt="" />
              <div>
                <h6>
                  <strong>Einrichtung Foodiary PRO</strong>
                </h6>
                <p className="my-0">
                  Wir richten unsere App ein. Ihr Mitglied kann direkt mit der PRO
                  Version beginnen
                </p>
              </div>
            </div>
            <div className="service d-flex">
              <img src={Icon} alt="" />
              <div>
                <h6>
                  <strong>Health Score</strong>
                </h6>
                <p className="my-0">
                  Wir ermitteln eine Health Score und helfen die, Ernährung
                  langfristig gesund zu gestalten.
                </p>
              </div>
            </div>

            <div className="service d-flex">
              <img src={Icon} alt="" />
              <div>
                <h6>
                  <strong>Tipps & Tricks</strong>
                </h6>
                <p className="my-0">
                  Wir unterstützen mit wertvollen Tipps und Tricks.
                </p>
              </div>
            </div>
            <div className="service d-flex">
              <img src={Icon} alt="" />
              <div>
                <h6>
                  <strong>Foodiary Ansprechpartner</strong>
                </h6>
                <p className="my-0">
                  Für aufkommende Fragen steht ihrem Mitglied ein Ansprechpartner
                  zur Verfügung.
                </p>
              </div>
            </div>
          </Services>
        </Wrapper>
      </div>
    </Section>
  );
};

export default CouchServices;
