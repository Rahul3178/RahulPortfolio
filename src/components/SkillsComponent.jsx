import React from "react";
import './SkillsComponent.css'
import userSkills from '../data/Skills_data'

const SkillsComponent = () => {
  return (
    <div className="container-fluid p-3">
      
    <div className="row mb-3 mt-5">
      {
         userSkills.map((item)=>(
          <ul className="col-md-6 col-lg-2  col-sm-12  mb-3 text-wrap list-unstyled" key={item.id}>
                     
        <li className="d-flex gap-3  p-1  shadow" id="SkillBorder">
        {/* <img src="vite.svg" alt="" className="" /> */}
        <span className="bi"></span>
        <p className="text-wrap p-2">{item.skillName}</p>

        </li>
        
      </ul>
         ))
      }     
    </div>
         
    </div>
  );
};

export default SkillsComponent;
