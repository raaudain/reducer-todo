
export const initialState = {
    todo: []
}

export const reducer = (state, action) => {

    switch(action.type){
        case "ADD_ITEM":
            //console.log(action.payload)
            const newItem = {
                name: action.payload,
                completed: false,
                id: Date.now()
            }
            return{
                todo: [...state.todo, newItem]
            }
        
        case "TOGGLE_ITEM":
            const isCompleted = state.todo.map(item => {
                //console.log("hey",state.todo)
                if(item.id === action.payload){
                    return{
                        ...item,
                        completed: !item.completed
                    };
                }
                else{
                    return item;
                }  
            })
            return{
                ...state,
                todo: isCompleted
            }
        
        case "CLEAR_COMPLETED":
            return{
                ...state,
                todo: state.todo.filter(item => item.completed === false)
            }

        default:
            return state;
    }
}