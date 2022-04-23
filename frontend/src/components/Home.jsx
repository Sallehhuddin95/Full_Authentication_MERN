import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const routeSignIn = () => {
    let path = `/signin`;
    navigate(path);
  };

  const routeSignUp = () => {
    let path = `/signup`;
    navigate(path);
  };

  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://picsum.photos/seed/picsum/900/400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Welcome World</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <input
              type="button"
              className="btn btn-primary mb-3"
              value="Sign In"
              onClick={routeSignIn}
            ></input>
            <input
              type="button"
              className="btn btn-secondary mb-3 mx-3"
              value="Sign Up"
              onClick={routeSignUp}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
