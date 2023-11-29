
const initialState = [{ // Estado inicial de la app
    id: 1,
    todo: 'Tarea 1',
    done: false,
}];

const todoReducer = (state = initialState, action = {}) => { // Reducer -> Función pura con dos argumentos, Estado Inicial  y Acción
    
    if (action.type === '[TODO] add todo') {// Agregar acción al Reducer
        return [...state, action.payload]; // Retorna un nuevo estado basado en las acciones recibidas
    }

    return state; // Siempre debe regresar un Estado
}

let todos = todoReducer();

const newTodo = {
    id: 2, 
    todo: 'Tarea 2',
    done: false
}

const addTodoAction = { // Acción
    type: '[TODO] add todo', // Nombre de la Acción
    payload: newTodo, // Acción a realizar
}

todos = todoReducer(todos, addTodoAction); // Estado Actual y Acción

console.log({ state: todos });