import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

function TodoList() {
  const {todos, loading, error, limit, page} = useTypedSelector(state => state.todo);
  const {fetchTodos, setTodoPage} = useActions();
  const pages = [1, 2, 3, 4, 5]
  
  useEffect(() => {
    fetchTodos(page, limit);
  }, [page])

  return (
    <div>
      {todos.map(todo => 
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      )}

      <hr/>
      {pages.map(page => 
        <div onClick={() => setTodoPage(page)}>
          {page}
        </div>
      )}
    </div>
  );
}

export default TodoList;