import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
const Dashboard = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (isLoading) {
    return (
      <div className="container-fluid">
        <div className="row my-5 justify-content-center">
          <div className="col-lg-12">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    isAuthenticated && (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary sticky-top">
          <div class="container-fluid">
            <h3 class="navbar-brand text-light">My Auth0-App</h3>

            <p className="text-light">
              WelCome
              <span>
                <b> {user.name}</b>
              </span>
            </p>
          </div>
        </nav>
        <div className="conatiner-fluid home">
          <div className="row my-4">
            <div className="col-lg-5 p-5">
              <div className="row g-0">
                <div className="col-lg-9">
                  <div className="card align-items-center shadow bg-dark rounded text-light">
                    <div>
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="img-fluid my-3 rounded-pill"
                      />
                    </div>
                    <h3 className="mb-3">View Your Details</h3>
                    <div className="p-3">
                      <p>Nick-Name: {user.nickname}</p>
                      <p>UserName: {user.name}</p>
                      <p>Email: {user.email}</p>
                      <p>Subject: {user.sub}</p>
                      <p>Updated at: {user.updated_at}</p>
                    </div>
                    <div className="mb-3">
                      <Button variant="light" onClick={handleShow}>
                        LogOut
                      </Button>

                      <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title>{user.name}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          <h4>Thank You for Visiting!!!!</h4>
                          <p>Do you want to logut?</p>

                          <button
                            className="btn btn-info"
                            onClick={() =>
                              logout({ returnTo: window.location.origin })
                            }
                          >
                            Log Out
                          </button>
                        </Offcanvas.Body>
                      </Offcanvas>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 ">
                  <a href="https://deft-genie-bbdf95.netlify.app/">
                    <button className="btn btn-info position-absolute top-50 start-25 translate-middle-x my-2">
                      View My Projects
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </>
    )
  );
};

export default Dashboard;
