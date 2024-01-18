const SkillWidgets = () => {
  return (
    <div className=''>
      <div className="row p-3">
        <div className="col-md-4 col-sm-6 mb-3">
          <div className="card border rounded rounded-4 p-3 shadow shadow-lg " style={{minHeight:"300px" ,backgroundColor: "#ebfbee"}}> 
            <div className="card-body">
              <h5 className='card-text text-center mb-3'><span className="bi bi-file-earmark-code-fill"></span>&nbsp;Language|Libraries|Frameworks</h5>
              <ul className='list-unstyled d-flex justify-content-start gap-3 flex-wrap'>
                <li>Core Java 8</li>
                <li>JavaScript</li>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>Bootstrap 5</li>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>Redux Toolkit</li>
                <li>AWS</li>
                <li>Tailwind CSS</li>
                <li>GIT</li>
                <li>Maven</li>
                
                
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-3">
          <div className="card border rounded rounded-4 p-3 shadow shadow-lg" style={{minHeight:"300px",backgroundColor:"#e3f2fd"}}>
            <div className="card-body">
              <h5 className='card-text text-center mb-3'><span className='bi bi-database'></span>&nbsp;Databases</h5>
              <ul className='list-unstyled list-unstyled d-flex justify-content-start gap-3 flex-wrap'>
                <li>MySQL</li>
                <li>NOSQL</li>                
                <li>MongoDb</li>                
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-3">
          <div className="card border rounded rounded-4 p-3 shadow shadow-lg" style={{minHeight:"300px", backgroundColor:"#ffec99"}}>
            <div className="card-body">
            <h5 className='card-text text-center mb-3'><span className='bi bi-tools'></span>&nbsp;Tools</h5>
              <ul className='list-unstyled d-flex gap-3 flex-wrap'>
                <li>Eclipse Ide</li>
                <li>Intelij</li>
                <li>Visual Studio code</li>
                <li>Postman</li>
                <li>JIRA</li>
                <li>SOUP UI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillWidgets
