import "../../styles/login.css";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [goodLogin, setGoodLogin] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
    if (activeModal.title === "login") {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target[0].value,
          password: e.target[1].value,
        }),
      };

      const result = await fetch(
        "https://quiz-app-project-3.herokuapp.com/api/auth/login",
        options
      );
      const data = await result.json();
      if (result.status !== 200) {
        setGoodLogin(false);
        return;
      }
      localStorage.setItem("token", data.token);
    } else {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target[0].value,
          name: e.target[1].value,
          password: e.target[2].value,
        }),
      };
      const result = await fetch(
        "https://quiz-app-project-3.herokuapp.com/api/auth/register",
        options
      );
      console.log(result.status);
      if (result.status !== 200) {
        setGoodLogin(false);
        return;
      }
      const data = await result.json();
      localStorage.setItem("token", data.token);
    }
    window.location.href = "./dashboard";
  }

  const [show, setShow] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  return (
    <>
      <Modal show={show} className = 'login-modal'>
        <Modal.Header>
          <Modal.Title className ='text-shade-3'>{activeModal && activeModal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label className = 'mt-2 p-1'> email address</Form.Label>
              <Form.Control
              className = 'mt-2 p-1'
                type="email"
                placeholder="enter email..."
              ></Form.Control>
              {activeModal && activeModal.title === "register" ? (
                <>
                  <Form.Label className = 'mt-2 p-1'> name </Form.Label>
                  <Form.Control className = 'mt-2 p-1' type="text" placeholder="name"></Form.Control>
                </>
              ) : (
                ""
              )}
              <Form.Label className = 'mt-2 p-1'> password </Form.Label>
              <Form.Control
              className = 'mt-2 p-1'
                type="password"
                placeholder="enter password ..."
              ></Form.Control>
              <Button className="submit-special-button" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <h2 className="bad-login">{goodLogin ? "" : "bad login"}</h2>
          <button
          className = 'special-button'
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <div>
        <div className="buttons">
         
            <h1 className="landing-title text-5xl">Welcome to Inquizitve!</h1>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-7 col-md-5 col-xl-4 col-xl-3">
                  <button
                    id="custom-button"
                    onClick={() => {
                      setActiveModal({
                        title: "login",
                      });
                      setShow(true);
                    }}
                  >
                    Login
                  </button>
                  <button
                    id="register-button"
                    onClick={() => {
                      setActiveModal({
                        title: "register",
                      });
                      setShow(true);
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Login;
