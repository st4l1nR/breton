import {
  Section,
  TextContent,
  VisualContent,
  Background,
  Wrapper
} from "./WriteOwnStory.style";
import UserProfileImage from "assets/outer-pages/png/user.jpg";
import CornerBg from "assets/outer-pages/svg/Foodiary-small-corner.svg";

const WriteOwnStory = () => {
  return (
    <Section>
      <Background background={CornerBg} />
      <div className="container">
       <Wrapper className="d-flex">
       <VisualContent>
          <img src={UserProfileImage} alt="UserProfileImage" />
        </VisualContent>
        <TextContent>
          <h3 className="my-0">
            Lass dich motivieren, deine <br />
            <strong>eigene Erfolgsgeschichte</strong> {" "}
            zu schreiben
          </h3>
          <p>
            „Viele Wege führen nach Rom“ - Dieses Sprichwort bezieht das Römisch
            Straßennetz und beschreibt, das viele Wege des damaligen Straßennetz
            nach Rom führen. Genau so ist es auch in der Ernährungsplanung.
            <br /> Es gibt viele Wege das Ziel zu erreichen und mit diesen
            Erfolgsgeschichten möchten wir dir unterschiedliche Wege der
            Ernährungsumstellung aufzeigen. Die Erfolge sind nicht im direkten
            Zusammenhang mit Foodiary Coaching entstanden und sollen dich
            motivieren und unterstützen an dein Ziel zu glauben und den ersten
            Schritt zu gehen.
          </p>
          <button className="btn-secondary btn-medium rounded">
            Erfolgsgeschichten
          </button>
        </TextContent>
       </Wrapper>
      </div>
    </Section>
  );
};

export default WriteOwnStory;
