import React from "react";
import TodoContainer from "./todoComponent/TodoContainer";
import NavbarComponent from "./NavbarComponent";
import ProfileComponent from "./ProfileComponent";
import SkillsComponent from "./SkillsComponent";
import FooterComponent from "./FooterComponent";
import ProjectsComponent from "./ProjectsComponent";
import SkillWidgets from "./SkillWidgets";
import TodoDashboard from "./todoComponent/TodoDashboard";
const HomeContainerComponent = () => {
  return (
    <div className="container-fluid border ">
      <nav className="">
        <NavbarComponent />
      </nav>
      <main>
        <section className="container-fluid border mt-3 mb-3 p-0" id="profile">
          <ProfileComponent/>
        </section>
        <section className="container-fluid m-0 mb-3 shadow-5" id="skills">
          <div className=" text-center">
            <h3>Skills</h3>
            {/* <SkillsComponent /> */}
            <SkillWidgets/>
          </div>
        </section>
        <section
          className="container-fluid border rounded-4 mb-3 " id="projects"
          style={{ backgroundColor: "#ebfbee" }}
        >
          <div className="container-md-fluid text-center ">
            <h3 className="p-3">Projects</h3>
            <ProjectsComponent />
          </div>
        </section>
        <section className="mb-3" id="todos">
          <TodoDashboard />
        </section>
        <section className="container-fluid mb-3 border rounded-3" id="contacts">
         {/* <SkillWidgets/> */}
        </section>
      </main>
      <footer className="container-fluid bg-dark text-white">
        <FooterComponent />
      </footer>
    </div>
  );
};

export default HomeContainerComponent;
