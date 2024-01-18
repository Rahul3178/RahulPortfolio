import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodosCards from "./TodosCards";
import { addTask } from "../../features/taskSlicer";
import TodoList from "./TodoList";
const TodoContainer = () => {
  //! handle dispatch action
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const [task, setTodo] = useState("");

  const [localTasks, setLocalTask] = useState([]);
  

  useEffect(() => {
   localStorage.setItem("tasks", JSON.stringify(tasks));  
  }, [task,tasks]);



 

  const AddTodo = (e) => {
    setTodo(e.target.value);
  };

  function HandleListOfTodo (e) {
    e.preventDefault();

    dispatch(addTask(task));
    setTodo("");
  }

  return (
    <h3>Task</h3>
    // <div className="container-fluid">
    //   <div className="row ">
    //     <div className="col-md-12 mt-5">
    //       <div>
    //         <form
    //           onSubmit={HandleListOfTodo}
    //           className="container d-md-flex p-2 gap-3 justify-content-start align-item-center "
    //         >
    //           <input
    //             className="form-control mb-3"
    //             type="text"
    //             name="todoInput"
    //             value={task}
    //             placeholder="What's on your mind Today?"
    //             onChange={AddTodo}
    //             required
    //           />

    //           <button className="btn btn-outline-success form-control mb-3">
    //             Add Todo
    //           </button>
    //         </form>
    //       </div>
    //       <div className=" text-dark  text-center mt-3">
    //         <span
    //           id="todos--cardColor"
    //           className="fs-5 border border-1 px-3 py-1 rounded-5 shadow"
    //         >
    //           {/* <i className="bi bi-bucket-fill"></i> Total Task | {tasks.length} */}
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col-md-12 mt-5 mb-3">
    //         <TodoList tasks={tasks} />
          
    //     </div>
    //   </div>
    // </div>
  );
};

export default TodoContainer;
