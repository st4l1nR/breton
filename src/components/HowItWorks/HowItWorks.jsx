import { Section, Wrapper, Card } from "./HowItWorks.style";
import Icon from "assets/outer-pages/svg/Icon-Ernährung-Foodiary.svg";

const HowItWorks = () => {
  return (
    <Section>
      <h2 className="text-center">
        Und so <strong>funktioniert's</strong>
      </h2>
      <Wrapper className="d-grid">
        <Card>
          <img src={Icon} alt="" />
          <h6>Vereinbare dein kostenloses Erstgespräch</h6>
          <p className="my-0">
            Ihre Sporteinrichtung erhält von uns einen eigenen QR-Code mit
            dazugehöriger Webseite. Über diese Webseite können Ihre Mitglieder
            einfach ihren Wunschtermin mit unserem Coach buchen.
          </p>
        </Card>
        <Card>
          <img src={Icon} alt="" />
          <h6>Vereinbare dein kostenloses Erstgespräch</h6>
          <p className="my-0">
            Ihre Sporteinrichtung erhält von uns einen eigenen QR-Code mit
            dazugehöriger Webseite. Über diese Webseite können Ihre Mitglieder
            einfach ihren Wunschtermin mit unserem Coach buchen.
          </p>
        </Card>
        <Card>
          <img src={Icon} alt="" />
          <h6>Vereinbare dein kostenloses Erstgespräch</h6>
          <p className="my-0">
            Ihre Sporteinrichtung erhält von uns einen eigenen QR-Code mit
            dazugehöriger Webseite. Über diese Webseite können Ihre Mitglieder
            einfach ihren Wunschtermin mit unserem Coach buchen.
          </p>
        </Card>
      </Wrapper>
    </Section>
  );
};

export default HowItWorks;
