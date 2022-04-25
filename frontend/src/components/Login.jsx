import React, { Component, useState } from "react";
import Axios from "axios";
// import "../styles/style.css";

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
              className="form-control form-group my-3"
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setLoginPassword(e.target.value)}
              className="form-control form-group my-3"
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
          <div class="google-div">
            <a
              class="btn-block btn-google btn"
              onClick={loginGoogle}
              role="button"
            >
              <i class="fab fa-google"></i>
              <p className="google-text">Sign In with Google</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
