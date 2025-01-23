
function todoReducer(inicialState, action) {
  
    switch (action.type) {
        //caso para agregar datos de todos de tareas
        case '[TODO] Add Todo':
            return [ ...inicialState, action.payload ];
    
        case '[TODO] Remove Todo':
            return inicialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return inicialState.map((todo)=>{
                if(todo.id === action.payload){
                    return {...todo, dono: !todo.dono};
                }
                return todo;
            })
        default:
            return inicialState;
    }
  
}

export default todoReducer