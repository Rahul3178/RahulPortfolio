import React from "react";

const ProjectsComponent = () => {
  const val = [1, 2, 3, 4, 5];
  return (
    <div className="p-0 m-0 " >
    <div className="mt-3 d-flex justify-content-start justify-content-md-center gap-3 p-3 flex-wrap ">
    <div className="row" >
      {val.map((index) => {
        return (
            //  outer
            <div className="col-md-3 col-sm-12" key={index}>
            
            
            <div
            className="card mb-3 shadow-lg text-center p-3"
            
          >
            {/* <div className="row g-0 overflow-auto"> */}
             {/* <div className="col-md-4 border p-1 ">
                <img
                  src="iron.gif"
                  className="img-fluid rounded-start"
                  alt="projects"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div> */}
              <div className="col-md-12 p-1">
              <img
                  src="iron.gif"
                  className="img-fluid  border border-2 rounded-5 p-3"
                  alt="projects"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="container-fluid d-flex justify-content-around">
                    <p className="">
                      <i className="bi bi-github"></i>
                      <a href="#">Go to Code</a>
                    </p>
                    <p>
                      <i className="bi bi-link"></i>
                      <a href="#">View site </a>
                    </p>
                  </div>
                   <div className="card-footer  d-flex flex-wrap card-text gap-1">
                    <small className=" badge bg-warning">
                      CSS
                    </small>
                    <small className=" badge bg-primary ">
                      React
                    </small>
                    <small className=" badge bg-success ">
                      Spring Boot
                    </small>
                    <small className=" badge bg-danger ">
                      Hibernate
                    </small>
                    <small className=" badge bg-dark  ">
                      HTML
                    </small>
                    <small className=" badge bg-info ">
                      Java Script
                    </small>
                    
                  </div>

                </div>
                {/* <div className="card-footer"> */}
                  {/* <div className=" d-flex flex-wrap card-text gap-1">
                    <small className=" badge bg-warning">
                      CSS
                    </small>
                    <small className=" badge bg-primary ">
                      React
                    </small>
                    <small className=" badge bg-success ">
                      Spring Boot
                    </small>
                    <small className=" badge bg-danger ">
                      Hibernate
                    </small>
                    <small className=" badge bg-dark  ">
                      HTML
                    </small>
                    <small className=" badge bg-info ">
                      Java Script
                    </small>
                    
                  </div> */}
                {/* </div> */}
              </div>
            </div>
            
            </div>
            // </div>
          
         
          
        );
      })}
      </div>
    </div>
    </div>
  );
};

export default ProjectsComponent;
