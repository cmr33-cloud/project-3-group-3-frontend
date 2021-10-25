import "../../styles/login.css";
import React, { useState } from "react";
import {Modal, Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {

  async function handleSubmit(e) {
    e.preventDefault();
    if (activeModal.title === 'login')
    {
      const options = {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify({
          email: e.target[0].value,
          password: e.target[1].value
        })
      }
      const result = await fetch('https://quiz-app-project-3.herokuapp.com/api/auth/login', options)
      const data = await result.json()
      console.log(data)
      localStorage.setItem('token',data.token);
    } else {
      const options = {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify({
          email: e.target[0].value,
          name: e.target[1].value,
          password: e.target[2].value
        })
      }
      const result = await fetch('https://quiz-app-project-3.herokuapp.com/api/auth/register', options)
      const data = await result.json()
      console.log(data)
      localStorage.setItem('token',data.token)
    }
  
  }

  const [show, setShow] = useState(false)
  const [activeModal, setActiveModal] = useState(null);
  return (

    <>
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>
            {activeModal && activeModal.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit = {handleSubmit}>
          <Form.Group>
            <Form.Label> email address</Form.Label>
            <Form.Control type="email" placeholder = "enter email..."></Form.Control>
            {activeModal && activeModal.title === 'register' ? <><Form.Label> name </Form.Label>
            <Form.Control type='text' placeholder = 'name'></Form.Control></> : ''}
            <Form.Label> password </Form.Label>
            <Form.Control type='password' placeholder = 'enter password ...'></Form.Control>
            <Button type='submit'>Submit</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        
        <Button onClick = {() => {setShow(false)}}>Close</Button>
      </Modal.Footer>
    </Modal>


    <div>
      <div className="buttons">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-7 col-md-5 col-xl-4 col-xl-3">
              <button id="login-button" onClick={() => {
                setActiveModal({
                  title: 'login' });
                setShow(true)}}>Login</button>
                <button id="register-button" onClick={() => {
                setActiveModal({
                  title: 'register' });
                setShow(true)}}>Register</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
