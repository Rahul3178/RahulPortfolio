import { useDispatch } from "react-redux";
import {
  removeTask,
  toggeledCompleted,
  updateTask,
} from "../../features/taskSlicer";

const TodoList = ({ tasks }) => {
  const dispatch = useDispatch();


        if(tasks?.length===0)
        {
            return (
                <>
                    <h3>No Task as of now</h3>
                </>
            )
        }else{
        

  return (
    <div className="">
      <div className="row p-3">
        {tasks?.map((task) => {
          return (
            <div
              className=" col-md-3 list-unstyled list-group  gx-3 gy-3"
              key={task.id}
            >
              <div
                className="list-group-item text-wrap"
                id={`${task?.completed ? "taskCompleted" : "taskNotCompleted"}`}
                onClick={() => dispatch(toggeledCompleted(task.id))}
              >
                {/* <input  type='checkbox' className='form-check-input float-left me-2'   onChange={()=>setChecked(true)}
                    checked={checked}
                /> */}
                <span
                  className="text-wrap taskCompletedColor"
                  id="completedTask"
                >
                  {task?.task}
                </span>

                <span
                  className="bi bi-trash-fill float-end text-danger fw-bold fs-5"
                  onClick={() => dispatch(removeTask(task.id))}
                >
                  {" "}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
    
}

export default TodoList;
