import { useReducer, useEffect } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

  
    const handleNewTodo = (todo) => {
            const action = {
                type: '[TODO] Add ToDo',
                payload: todo
            }
            dispatch(action);
        }
    
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove ToDo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
                type: '[TODO] Toggle ToDo',
                payload: id
        })
    }

    return {
        todos,
        todosCount: todos.length,
        pendingsTodos: todos.filter( todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
