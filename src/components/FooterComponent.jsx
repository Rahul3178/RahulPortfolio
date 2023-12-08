import React from "react";

const FooterComponent = () => {
  return (
    <div
      className="container-fluid  text-center p-5 "
      style={{ minHeight: "350px" }}
    >
      <div className="row">
        <div className="col-md-4">
          <p className="fw-bold fs-4">Rahul Kumar</p>
          <address>Addresss</address>
          <a href="mailto:Rahulkumar.dev@outlook.com"> <span className="bi bi-envelope-at"></span>&nbsp; Rahulkumar.dev@outlook.com</a>
          <div className="container d-flex justify-content-between mt-3 mb-3">
            <span className="bi bi-discord fs-3"></span>
            <span className="bi bi-linkedin fs-3" ></span>
            <span className="bi bi-twitter  fs-3" ></span>
            <span className="bi bi-github  fs-3" ></span>
          </div>
        </div>
        <div className="col-md-4">
          <span className="fs-4 fw-bold">Links</span>
          <ul className="list-unstyled text-white ">
            <li className="">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li>
              <a className="nav-link" href="#" >
                Project
              </a>
            </li>
            <li>
              {" "}
              <a className="nav-link" href="#" >
                Skills
              </a>
            </li>
            <li>
              <a className="nav-link" href="#" >
                About
              </a>{" "}
            </li>
            <li>
              {" "}
              <a className="nav-link" href="#" >
                Tasks
              </a>
            </li>
            <li>
              <a className="nav-link" href="#" >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <span className="fs-4 fw-bold" >Resources</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <span>&copy; All Right reserved 2023 </span>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
