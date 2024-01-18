import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../features/taskSlicer";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";

const TodoDashboard = () => {
  const tasksList= useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [task, setTask] = useState("");



  useEffect(()=>{
    localStorage.setItem("taskList",JSON.stringify(tasksList));
  },[task,tasksList])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form className="mb-3" onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addTask(task));
            setTask("");
          }}>
            <div className="input-group">
              <input
                type="text"
                className="form-control text-wrap"
                name="todoInput"
                value={task}
                placeholder="What's on your mind Today?"
                onChange={e=>{ setTask(e.target.value)}}
                required
              />

              <button className="btn btn-success">Add Task</button>
            </div>
          </form>
          <div className="text-center m-1">
            {
                tasksList?.length===0?"Empty Bucket":tasksList?.length
            }
          
          </div>
         
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <TodoList tasks={tasksList} />
        </div>
      </div>
    </div>
  );
};

export default TodoDashboard;
