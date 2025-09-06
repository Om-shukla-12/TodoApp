import React from "react";
import { MdCheck,MdDeleteForever  } from "react-icons/md";
import './Todo.css';

export const TodoList = ({ data, handleDelete,checked,onHandleChecked }) => {
    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"}>{ data }</span>
                <button className="check-btn"
                onClick={() => onHandleChecked(data)}>
                    <MdCheck/>
                </button>

                <button className="delete-btn" 
                onClick={() => handleDelete(data)}>
                    <MdDeleteForever/>
                </button>
                </li>
    )
}