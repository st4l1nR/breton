import { Link } from "react-router-dom"
import Header from "components/Header/Header"
import UserSlider from "components/UserSlider/UserSlider"
import CouchCard from "components/CouchCard/CouchCard"
import CouchFilters from "components/CouchFilters/CouchFilters"
import AppointmentSection from "components/AppointmentSection/AppointmentSection"
import ClientsTestimonials from "components/ClientsTestimonials/ClientsTestimonials"
import Footer from "components/Footer/Footer"

function Home() {
  return (
    <>
      <div className="home-page">
        <Header />
        <div className="container">
          <main>
            <div className="header text-center">
              <h1>
                Finde deinen <strong>Foodiary</strong> Coach
              </h1>
              <p>
                Wähle deinen persönlichen Ernährungsberater, welcher dich bei
                deiner
                <br /> Ernährungsumstellung mit wertvollen Tipps und Tricks
                unterstützt.
              </p>
            </div>
            <UserSlider />
            <CouchFilters />
            <section className="grid-view">
              <CouchCard />
              <CouchCard />
              <CouchCard />
              <CouchCard />
            </section>
          </main>
        </div>
        <div className="bg-curve">
          <div className="container">
            <AppointmentSection />
            <ClientsTestimonials />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default Home
