import React,{ useState } from "react";

export const TodoForm = ({onAddTodo}) => {
     const [inputvalue,setInputValue] = useState({});

    const handleInputChange = (value) => {
    // Update the input value
      setInputValue({id:value,content:value,checked:false});
   }

   const handleFormSubmit = (e) => {
      e.preventDefault();
      onAddTodo(inputvalue);
      setInputValue({id:"",content:"",checked:false});
   }

   return(
    <section >
                <form className="form" onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" 
                        className="todo-input" 
                        value={inputvalue.content}
                        onChange={(e) => handleInputChange(e.target.value)} 
                        autoComplete="off" />
                    </div>
                        <div>
                            <button type="submit" className="add-task-button">Add Task</button>
                        </div>
                </form>
            </section>
   )
}