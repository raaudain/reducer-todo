import React from "react";
import Todo from "./Todo"

export const TodoList = props => {

    const clearCompleted = () => {
        props.clearCompleted()
    }
    
    return(
        <div>
            <div>
                {props.todo.map(item => (
                    <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
                ))}
            </div>

            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}