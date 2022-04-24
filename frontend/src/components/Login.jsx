import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import "../styles/style.css";
import "../styles/bootstrap-social.css";

function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    console.log("enter login");
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/signin",
    }).then((res) => console.log(res));
  };

  const loginGoogle = () => {
    window.open("http://localhost:4000/auth/google/welcome", "_self");
  };

  return (
    <div className="sign-in-div">
      <div className="container">
        <div className="form-div">
          <form
            onSubmit={login}
            className="signin-form my-5 col-xs-12 col-md-6"
          >
            <h3 className="mt-3">Login</h3>
            <input
              placeholder="Username"
              type="text"
              onChange={(e) => setLoginUsername(e.target.value)}
              className="form-control form-group my-3 w-50"
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setLoginPassword(e.target.value)}
              className="form-control form-group my-3 w-50"
            />
            <input
              type="submit"
              className="btn btn-danger mb-3"
              value="Submit"
            ></input>
            {/* <button className="btn-danger mb-3" onClick={login}>
              Submit
            </button> */}
          </form>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <a
                  class="btn btn-block btn-social btn-google"
                  onClick={loginGoogle}
                  role="button"
                >
                  <i class="fab fa-google"></i>
                  Sign In with Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
