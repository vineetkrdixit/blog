import React from "react";
import "../Contactus/Contactus.css";

export default function Contactus() {
  return (
    <>
      <section className="fullbody">
        <div className="row">
          <div className="col-sm-12"></div>
          <div className="contactus-header">
            <h2>Contact Us</h2>
            <p>We'd Love to Hear From You </p>
          </div>
        </div>
        <div className="row">
          <div className="contactusbody">
            <div className="col-sm-6 contactus-Details">
              <div className="meetus">Meet Us</div>
              <br />
              <div className="box">
                <div className="icon">
                  <i className="fa fa-map"></i>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="text">
                  <h5>Address</h5>
                  <p>
                    Akshya Nagar <br /> 1st Block 1st Cross, Rammurthy nagar,
                    <br />
                    Bangalore-560016
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-envelope"></i>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="text">
                  <h5>Email</h5>
                  <p>Jack@gmail.com</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-phone"></i>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="text">
                  <h5>Phone</h5>
                  <p>+91 9876543210</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 contactus-form">
              <div className="contactForm">
                <form className="contact-form">
                  <div className="mb-3 form-input">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control-plaintext"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3 form-input">
                    <label htmlFor="name" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control-plaintext"
                      id="name"
                      aria-describedby="nameHelp"
                    />
                  </div>
                  <div className="mb-3 form-input">
                    <label htmlFor="name" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="textarea"
                      required="required"
                    ></textarea>
                  </div>

                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
