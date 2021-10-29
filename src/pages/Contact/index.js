import React from "react";
import emailjs from "emailjs-com";
import { Container, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import './modal.css'
// const dotenv = require('dotenv');
require('dotenv').config();


// import USER_ID from '../../../src/.env'

export default function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // dotenv.config();

  function sendEmail(e) {
    e.preventDefault();
    console.log(process.env.USERID)
    emailjs
      .sendForm(
        "service_lrr82qp",
        "template_3snflyj",
        e.target,
        process.env.REACT_APP_USERID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <Container>
        <h2 className="mt-5"> Contact Form </h2>
        <form onSubmit={sendEmail}>
          <div>
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto ">
              <input
                type="submit"
                className="btn btn-info"
                data-toggle="modal"
                value="Send Message"
                onClick={handleShow}
              ></input>
            </div>
          </div>
        </form>
      </Container>

    <div className="modalDiv">
      <Modal show={show} onHide={handleClose} className="modalStyle">
        <Modal.Header closeButton>
          <Modal.Title>Message sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thanks for your message. We will contact you soon.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>

  );
}
