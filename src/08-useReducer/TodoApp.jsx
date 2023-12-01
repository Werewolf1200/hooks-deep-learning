import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {

    const { todos, todosCount, pendingsTodos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo()
    
  return (
      <>
          <h1>TodoApp</h1>

          <h2>TodoApp: {todosCount}, <small>pendientes: {pendingsTodos}</small></h2>

          <div className="row">
              <div className="col-7">
                  
                  <TodoList
                      todos={todos}
                      onDeleteTodo={handleDeleteTodo}
                      onToggleTodo= { handleToggleTodo }
                  />               
                  
              </div>

              <div className="col-5">
                  <h4>Agregar Tarea</h4>

                  <TodoAdd onNewTodo={handleNewTodo}/>

              </div>
          </div>

      </>
  )
}
