import React from 'react'

function extra() {
  return (
    <div className="d-flex justify-content-start gap-4 overflow-auto " >
    {props.todoList.map((item) => {
      return (
        <div
        id="todos--cardColor"
          className="card mb-3 border border-dark border-1 rounded-5 shadow"
          style={{ minWidth: "350px",maxWidth:"400px" }}
          key={item}
        >
          <div className="container p-3 ">
            <div className="d-flex justify-content-between align-items-center">
              <div className="img">
                <img
                  className="rounded-circle border border-3 border-success"
                  src="Rahul_user.jpg"
                  alt="taskIcon"
                  style={{width:"50px", height:"50px"}}
                />
              </div>
              <div className="taskDelete">
                <button type="button" className="btn-close" aria-label="Close" onClick={()=>dispatch(removeTask(todo.id))}>
                  
                </button>
              </div>
            </div>
          </div>
          <div className="card-body text-center text-wrap">
            <p className="card-text text-wrap" >{item}</p>
          </div>
          <div className="container p-2 d-flex justify-content-end">
            <small className="text-muted">{props.date}</small>
          </div>
        </div>
      );
    })}
    
  </div>
  )
}

export default extra
