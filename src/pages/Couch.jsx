import Header from "components/Header/Header";
import WriteOwnStory from "components/WriteOwnStory/WriteOwnStory";
import ClientsTestimonials from "components/ClientsTestimonials/ClientsTestimonials";
import Footer from "components/Footer/Footer";
import CouchInfo from "components/CouchInfo/CouchInfo";
import HowItWorks from "components/HowItWorks/HowItWorks";
import CouchServices from "components/CouchServices/CouchServices";
import CouchingSupports from "components/CouchingSupports/CouchingSupports";

function Couch() {
  return (
    <>
      <div className="couch-page">
        <Header isBig />
        <main>
          <div className="container">
            <CouchInfo />
          </div>
          <WriteOwnStory />
          <div className="container">
            <HowItWorks />
          </div>
          <CouchServices />
          <CouchingSupports />
          <div className="container">
            <ClientsTestimonials />
          </div>
        </main>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Couch;
