import React, {useState} from "react";

export const TodoForm = props => {

    const [input, setInput] = useState("");

    const changeHandler = e => {
        setInput(e.target.value)
    }

    const sumbitHandler = e => {
        e.preventDefault();
        props.addItem(input);
        setInput("");
    }

    return(
        <div>
            <form onSubmit={sumbitHandler}>
                <input 
                    type="text"
                    value={input}
                    name="item"
                    onChange={changeHandler}
                    className="inputField"
                />

                <button className="addBtn">Add</button>
            </form>
        </div>
    )

    
}