import '../ComponentsBackgroundColor.css'
import {useDispatch} from 'react-redux'
import { removeTask,updateTask,toggeledCompleted } from '../../features/taskSlicer';
import { useState } from 'react';
const TodosCards = ({tasks}) => {

 // const [isTaskEditable,setIsTaskEditable]=useState(false);


const dispatch=useDispatch();

//const tasks=useSelector((state)=>state.tasks)
//const [taskMessage,setTaskMessage]=useState(tasks.task)

  return (
    <div className="d-flex justify-content-start gap-3 flex-wrap " >
      {tasks.map((task) => {
        return (
          <ul
          id={`${task.completed?"taskCompleted":"taskNotCompleted"}`}
            className={`mb-3 border border-dark border-1 shadow`}
            style={{ minWidth: "350px",maxWidth:"400px" }}
            key={task.id}
          >
            <li className="d-flex justify-content-between align-items-center">
                <div className='taskCompleted'>
                    <input  type='checkbox' className='form-check-input'  onClick={()=>dispatch(toggeledCompleted(task.id))}/>
                </div>
                <div className="taskDelete">
                  <button type="button" className="btn-close" aria-label="Close" onClick={()=>dispatch(removeTask(task.id))}>
                    
                  </button>
                </div>
              
            </li>
            <div className="text-center text-wrap">
              {/* <input className="card-text text-wrap" value={task.task} readOnly={``}/> */}
              <p className="text-wrap">{task.task}</p>
            </div>
            {/* below code for date and time */}
            <div className="container p-2 d-flex justify-content-end">
              <small className="text-muted">{}</small>
            </div>
          </ul>
        );
      })}
      
    </div>
  );
};

export default TodosCards;
