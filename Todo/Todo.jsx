import React,{useEffect, useState} from "react";
import './Todo.css';
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import { getLocalData } from "./TodoLocalStorage";
import { setLocalData } from "./TodoLocalStorage";


export const Todo =() => {
   
    const [tasks, setTasks] = useState(() => getLocalData());

    setLocalData(tasks);

//    to submit a task
   const handleFormSubmit = (inputvalue) => {
        const {id,content,checked} = inputvalue;
      // Check if the input is empty
      if(!content) return;

      // Check for data is already existing or not
    //   if(tasks.includes(inputvalue)) return;

    const ifTodoContentExists = tasks.find((curTask) => curTask.content === content);
    if(ifTodoContentExists) return;
      
        // Add the new task to the list
      setTasks((prev)=> [...prev,{id,content,checked}]);
        
   }

//    to delete a task
   const handleDeleteTask = (content) => {
   const UpdatedTask = tasks.filter((curTask) => curTask.content !== content);
   setTasks(UpdatedTask);
   }

    // to check a task
    const handleChecked = (content) => {
const updatedTask = tasks.map((curTask)=> {
    if(curTask.content === content){
        return {...curTask, checked : !curTask.checked};
    }else{
        return curTask;
    }
    })
setTasks(updatedTask);
    }

    
    return(
       <section className="todo-container">

        <header className="header">
            <h1>Todo List</h1>
            <TodoDateTime />

        </header>
        <TodoForm  onAddTodo = {handleFormSubmit} />
        <section className="myUnOrdList">
            <ul>
        {
            tasks.map((curTask) => (
                <TodoList key={curTask.id} 
                data ={curTask.content} 
                handleDelete={handleDeleteTask}
                checked={curTask.checked}
                onHandleChecked = {handleChecked}/>
            ))
        }
            </ul>
        </section>
        <section>
            <button className="clear-btn" onClick={() => setTasks([])}>Clear All</button>
        </section>
       </section>
    )
}