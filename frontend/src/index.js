import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
import "./index.css";
import "./styles/bootstrap-social.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer, Home, SignIn, SignUp, Welcome } from "./components";

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
