import React from "react";

const Todo = props => {

    console.log(props)

    const toggleItem = () => {
        props.toggleItem(props.item.id)
        //console.log(props.item)
    };

    return(
        <div className={`item${props.item.completed ? "Completed" : ""}`} onClick={toggleItem} >
            <p>{props.item.name}</p>
        </div>
    )
    
}

export default Todo;