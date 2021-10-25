import "../../styles/login.css";
import React, { useState } from "react";
//import {Modal, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div>
      <div className="buttons">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-7 col-md-5 col-xl-4 col-xl-3">
              <button id="login-button">Login</button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-7 col-md-5 col-xl-4 col-xl-3">
              <button id="register-button">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
