import { useTodos } from '../../hooks/useTodos';
import { TodoList } from '../../components/ToDo/TodoList';
import './styles.css';


export default function Profile() {

  const { todos, toggleTodo, deleteTodo } = useTodos();

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
