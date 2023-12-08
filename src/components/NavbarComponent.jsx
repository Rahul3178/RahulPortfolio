import React from "react";

const NavbarComponent = () => {
  return (
    <div className="">
      <nav className="navbar  p-2 d-flex flex-wrap navbar-expand-lg" style={{backgroundColor:"#e3f2fd"}} >
        <div className="container-fluid">
          <span className="navbar-brand  fs-3 fw-bold float-left p-1" style={{borderColor:"yellow" , borderWidth:"20px", borderRadius:"15px"}}>
            &lt;RK/&gt;
          </span>
              
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
              <span className="navbar-toggler-icon"></span>
            </button>

              
            <div className="d-md-flex justify-content-center">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="d-flex justify-content-center">
          <ul  className=" navbar-nav list-unstyled  fw-bold m-auto" >
           
            <li className="nav-item">
              <a href="#projects" className="nav-link text-dark">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link text-dark">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#todos" className="nav-link text-dark">
                Todo
              </a>
            </li>

            <li className="nav-item">
              <a href="#contacts" className="nav-link text-dark">
                Contact
              </a>
            </li>
          </ul>
          </div>
            </div>


            </div>
            </div>
         
      
      </nav>
    </div>
  );
};

export default NavbarComponent;
