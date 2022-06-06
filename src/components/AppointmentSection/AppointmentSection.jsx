import { Section, TextContent, VisualContent } from "./AppointmentSection.style"
import AppointmentImage from "assets/outer-pages/svg/Foodiary-Coaching-devices.svg"

const AppointmentSection = () => {
  return (
    <Section>
      <TextContent>
        <h3 className="my-0">
          Nächsten <strong>Termin</strong> buchen
        </h3>
        <p>
          Buche das nächst möglichste Erstgespräch mit einem unserer
          qualifizierten Ernährungscoaches. Buche das nächst möglichste
          Erstgespräch mit einem unserer qualifizierten Ernährungscoaches.
        </p>
        <button className="btn-secondary btn-medium rounded">Erstgespräch vereinbaren</button>
      </TextContent>
      <VisualContent>
        <img src={AppointmentImage} alt="AppointmentImage" />
      </VisualContent>
    </Section>
  )
}

export default AppointmentSection
