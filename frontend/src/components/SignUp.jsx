import React, { useState } from "react";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/bootstrap-social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";

function SignUp() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerFullname, setRegisterFullname] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = () => {
    // console.log("test signup");
    Axios({
      method: "POST",
      data: {
        fullname: registerFullname,
        username: registerUsername,
        password: registerPassword,
        email: registerEmail,
      },
      withCredentials: true,
      url: "http://localhost:4000/signup",
    }).then((res) => console.log(res));
  };

  const registerGoogle = () => {
    window.open("http://localhost:4000/auth/google/welcome", "_self");
  };

  return (
    <div className="sign-up-div">
      <div className="container">
        <div className="form-div">
          <form
            onSubmit={register}
            className="signup-form my-5 col-xs-12 col-md-6"
          >
            <h3 className="mt-3">Register</h3>
            <input
              placeholder="fullname"
              type="text"
              onChange={(e) => setRegisterFullname(e.target.value)}
              className="form-control form-group my-3 w-50"
            />
            <input
              placeholder="username"
              type="text"
              onChange={(e) => setRegisterUsername(e.target.value)}
              className="form-control form-group my-3 w-50"
            />
            <input
              placeholder="email"
              type="text"
              onChange={(e) => setRegisterEmail(e.target.value)}
              className="form-control form-group my-3 w-50"
            />
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setRegisterPassword(e.target.value)}
              className="form-control form-group my-3 w-50"
            />
            <input
              type="submit"
              className="btn btn-danger mb-3"
              value="Submit"
            ></input>
            {/* <button onClick={register}>Submit</button> */}
          </form>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <a
                  class="btn btn-block btn-social btn-google"
                  onClick={registerGoogle}
                  role="button"
                >
                  <i class="fab fa-google"></i>
                  Sign Up with Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
