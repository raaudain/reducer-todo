import React, {useReducer} from 'react';
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {initialState, reducer} from "./reducer/Reducer"
import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = item => {
    dispatch({
      type: "ADD_ITEM",
      payload: item
    });
  }

  const toggleItem = id => {
    dispatch({
      type: "TOGGLE_ITEM",
      payload: id
    });
  }

  const clearCompleted = () => {
    dispatch({
      type: "CLEAR_COMPLETED"
    })
  }


  return (
    <div className="App">
      <TodoForm 
        addItem={addItem}
      />
      <TodoList 
        todo={state.todo}
        toggleItem={toggleItem}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
