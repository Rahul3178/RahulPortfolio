import React from "react";
import resume from './RahulKumar.pdf'
import './SkillsComponent.css'
const ProfileComponent = () => {
  return (
    <div className="container-fluid p-3  ">
      <div className="row">
        <div className="col-md-6 d-flex  align-item-center flex-column gap-5 mb-sm-5 mb-xs-5" >
          <div className="text-center mt-3 ">
            <h1>Hi 👋 I&apos;m <span className="bg-warning p-1">Rahul</span></h1>
            <h4>
              
              To transition from a testing-focused career to a dynamic
              development role,utilizing my keen eye for
              detailed,problem-solving abilities, and testing insights to build
              innovative and reliable software application
            </h4>
          </div>
          <div className="d-flex gap-5 justify-content-center align-item-center mb-5">
            <a href={resume} download="RahulResume" target="_blank"  rel="noopener noreferrer "><button className="btn btn-outline-success" type="button" ><span className="bi bi-send"></span>&nbsp; Resume</button></a>
            
            <a href="https://www.linkedin.com/in/rahul-kumar-a726ba202/" target="_blank" className="btn btn-outline-success " type="button" rel="noreferrer"> <span className="bi bi-linkedin"></span>&nbsp; Linkedin</a>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            id="userborder"
            className="img-fluid"
            src="Profile_bio.jpg"
            alt="Profilesnap"
            height="500px"
            width="500px"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
