import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";
const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary sticky-top">
          <div class="container-fluid">
            <h3 class="navbar-brand text-light">My Auth0-App</h3>
            <button
              onClick={() => loginWithRedirect()}
              className="btn btn-info"
            >
              Log In
            </button>
          </div>
        </nav>
        <div className="container-fluid home">
          <div className="row my-5">
            <div className="col-lg-4 mt-5 p-5">
              <h1 className="my-3">
                <span className="text-warning">Your-Brand</span> Value Impact{" "}
              </h1>
              <h4 className="text-danger">Promise of Quality Service </h4>
              <p className="my-3" style={{ textAlign: "justify" }}>
                Thank you for signing up for Auth0! You have 21 days left in
                your trial to experiment with features that are not in the Free
                plan. Like what you‘re seeing? Please enter your billing
                information here.
              </p>
              <button
                type="button"
                className="btn btn-info"
                onClick={() => loginWithRedirect()}
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Login;
