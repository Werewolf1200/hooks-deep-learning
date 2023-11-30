import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [
    {
        id: new Date().getTime(),
        description: "Tarea React 1",
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: "Tarea React 2",
        done: false,
    },
]

export const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log({ todo });
    }

  return (
      <>
          <h1>TodoApp</h1>

          <h2>TodoApp: 10, <small>pendientes: 2</small></h2>

          <div className="row">
              <div className="col-7">
                  
                  <TodoList todos={ todos } />               
                  
              </div>

              <div className="col-5">
                  <h4>Agregar Tarea</h4>

                  <TodoAdd onNewTodo={handleNewTodo}/>

              </div>
          </div>

      </>
  )
}
