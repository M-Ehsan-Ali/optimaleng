import SimpleMap from "../OptimalengMap/OptimalengMap";
import ContactTwoForm from "./ContactTwoForm";
import ContactTwoInfo from "./ContactTwoInfo";

const ContactTwo = () => {
  return (
    <section className="contact-aera contact-bg">
      <div className="container custom-container-four">
        <div className="contact-inner">
          <div className="row">
            <div className="col-lg-4">
              <ContactTwoInfo />
            </div>
            <div className="col-lg-4">
              <SimpleMap />
            </div>
            <div className="col-lg-4">
              <ContactTwoForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTwo;
