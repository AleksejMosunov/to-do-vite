import { useEffect } from 'react';
import { useTodoStore } from '../../store/todosStore';
import { TodoList } from '../../components/ToDo/TodoList';
import './styles.css';


export default function Profile() {
  const { todos, toggleTodo, deleteTodo, loadTodos } = useTodoStore();

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  return (
    <div className="todo-list-profile">
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
        <h1>My Active ToDo List</h1>
        <TodoList
          todos={todos}
          toggle={toggleTodo}
          remove={deleteTodo}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
        <h1>My Completed ToDo List</h1>
        <TodoList
          todos={todos}
          toggle={toggleTodo}
          remove={deleteTodo}
          archive
        />
      </div>
    </div>
  );
}
