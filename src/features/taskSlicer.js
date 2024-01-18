import { createSlice,nanoid } from "@reduxjs/toolkit"

const getDataFromLocalStorage=()=>{
    let data=JSON.parse(localStorage.getItem("tasks"));
    if(data==[])
    {
        return []
    }else{
        return data;
    }
}

const initialState={
    tasks:getDataFromLocalStorage()
}

const taskSlicer=createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask:(state,action)=>{
            const task={
                id:nanoid(),
                task:action.payload,
                completed:false,
            }
             state.tasks.push(task);
        },
        removeTask:(state,action)=>{
            state.tasks=state.tasks.filter((task)=>task.id!==action.payload)
        },
        updateTask:(state,action)=>{
            state.tasks=state.tasks.map((task)=>task.id===action.payload.id?{...task,task:action.payload.task}:task)
        },
        toggeledCompleted:(state,action)=>{
            state.tasks=state.tasks.map((task)=>task.id===action.payload?{...task,completed:!task.completed}:task)
        }


    }
})

export const {addTask,removeTask,updateTask,toggeledCompleted}= taskSlicer.actions;

export default taskSlicer.reducer;