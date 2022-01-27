import ContactForm from "../../forms/ContactForm";
import Footer from "../layout/Footer";
import HomeNavbar from "../layout/navbar";
import React, { useState } from "react";
import { Contact } from "../../../Constantes/Contact";
import { Addcontact } from "../../../services/Contact_services";
export default function HContact() {
  const [state, setstate] = useState(Contact);
  let handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value });
  };

  let handleSubmit = () => {
    Addcontact(state);
  };
  return (
    <div>
      <HomeNavbar />
      <br /> <br /> <br />
      <div className="container my-3">
        <div className="row g-3">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <i className="i-va" /> Do you have property you'd like to sell?
                Do you have a question about one of our auctions? Do you want to
                learn more about our company? We'd love to hear from you! Just
                fill out the form below and we will contact you promptly!
              </div>
              <div className="card-body">
                <ContactForm
                  onSubmit={handleSubmit}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-header">
                <i className="i-va" /> Contact US
              </div>
              <div className="card-body">
                <strong> Customer Service Phone:</strong>1-614-846-3300
                <br />
                <strong>Customer Service Hours:</strong> <br />
                Monday-Friday 9:00 AM - 9:00 PM, Saturday & Sunday Closed
                <br />
                <br />
                <h6 className="card-title border-bottom border-dark pb-2">
                  Head Office
                </h6>
                <address>
                  <strong>Twitter, Inc.</strong>
                  <br />
                  1355 Market St, Suite 900
                  <br />
                  Msaken sousse, CA 94103
                  <br />
                  <i className="i-va" /> <abbr title="Phone">P:</abbr> (123)
                  456-7890
                </address>
              </div>
            </div>
            <div className="card">
              <div className="google-maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51824.45794781538!2d10.547131702765347!3d35.72551460773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fdf5b7aa14bf95%3A0x533a5c49ccdec61a!2sM&#39;saken!5e0!3m2!1sfr!2stn!4v1642779534110!5m2!1sfr!2stn"
                  width={400}
                  height={300}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
