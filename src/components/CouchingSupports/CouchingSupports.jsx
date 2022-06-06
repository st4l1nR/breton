import {
  Section,
  Wrapper,
  Card,
  CardHeader,
  CardBody,
  CheckItem,
} from "./CouchingSupports.style";
import backgroundCurve from "assets/outer-pages/png/background-price.png";
import { Check } from "react-feather";

const CouchingSupports = () => {
  return (
    <Section background={backgroundCurve}>
      <div className="container">
        <Wrapper className="d-flex">
          <div className="left">
            <h2>
              Unsere <strong>Coachings</strong> im Überblick
            </h2>
            <p className="my-0">
              Das Foodiary BASIC Coaching unterstützt dich kostenlos, die ersten
              Schritte der Ernährungsumstellung zu meistern. Du erhältst vorab
              wichtige Informationen um bestens vorbereitet zu sein.
            </p>
          </div>
          <div className="right">
            <Card>
              <CardHeader className="text-center">ERSTGESPRÄCH</CardHeader>
              <CardBody>
                <h2 className="text-center">Kostenlos</h2>
                <CheckItem className="d-flex align-items-center">
                  <Check />
                  <p className="my-0">30 Minuten Erstgespräch</p>
                </CheckItem>
                <CheckItem className="d-flex align-items-center">
                  <Check />
                  <p className="my-0">
                    Unterstützung beim Erstellen deines Ernährungsplanes
                  </p>
                </CheckItem>
                <CheckItem className="d-flex align-items-center">
                  <Check />
                  <p className="my-0">
                    Erklärung aller Funktionen der Foodiary App
                  </p>
                </CheckItem>
                <CheckItem className="d-flex align-items-center">
                  <Check />
                  <p className="my-0">Persönlicher Coach für 3 Monate</p>
                </CheckItem>
                <CheckItem className="d-flex align-items-center">
                  <Check />
                  <p className="my-0">
                    Wöchentliches Fortschritt - Gespräch mit Verbesserungstipps
                  </p>
                </CheckItem>
                <CheckItem className="d-flex align-items-center">
                  <Check />
                  <p className="my-0">Foodiary PRO Funktionen</p>
                </CheckItem>
                <br />
                <button className="btn-secondary w-100 large">Auswählen</button>
              </CardBody>
            </Card>
          </div>
        </Wrapper>
      </div>
    </Section>
  );
};

export default CouchingSupports;
