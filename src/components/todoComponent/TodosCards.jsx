import '../ComponentsBackgroundColor.css'
import {useDispatch} from 'react-redux'
import { removeTask,updateTask,toggeledCompleted } from '../../features/taskSlicer';
import { useState } from 'react';
const TodosCards = ({tasks}) => {

  const [isTaskEditable,setIsTaskEditable]=useState(false);


const dispatch=useDispatch();

//const tasks=useSelector((state)=>state.tasks)
//const [taskMessage,setTaskMessage]=useState(tasks.task)

  return (
    <div className="d-flex justify-content-start gap-3 flex-wrap " >
      {tasks.map((task) => {
        return (
          <div
          id={`${task.completed?"taskCompleted":"taskNotCompleted"}`}
            className={`card mb-3 border border-dark border-1 rounded-5 shadow`}
            style={{ minWidth: "350px",maxWidth:"400px" }}
            key={task.id}
          >
            <div className="container p-3">
              <div className="d-flex justify-content-between align-items-center " >
                <div className="img">
                  <img
                    className="rounded-circle border border-3 border-success"
                    src="Rahul_user.jpg"
                    alt="taskIcon"
                    
                    style={{width:"50px", height:"50px"}}
                  />
                  <span className='p-3'>Rahul</span>
                </div>
                <div className='taskCompleted'>
                    <button className='badge bg-primary'  onClick={()=>dispatch(toggeledCompleted(task.id))}>Completed</button>
                </div>
                <div className="taskDelete">
                  <button type="button" className="btn-close" aria-label="Close" onClick={()=>dispatch(removeTask(task.id))}>
                    
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body text-center text-wrap">
              {/* <input className="card-text text-wrap" value={task.task} readOnly={``}/> */}
              <p className="card-text text-wrap">{task.task}</p>
            </div>
            <div className="container p-2 d-flex justify-content-end">
              <small className="text-muted">{}</small>
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default TodosCards;
