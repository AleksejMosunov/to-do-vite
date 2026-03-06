import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import './styles.css';
import { TodoList } from '../../components/ToDo/TodoList';

export const Home = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [todo, setTodo] = useState({ title: "", description: "" });

  const token = localStorage.getItem('token');

  function handleAdd() {
    if (!token) { // проверяем null
      alert("Вы не авторизованы");
      return;
    }
    if (todo.title.trim() === "") return;
    addTodo(todo.title, todo.description, token);
    setTodo({ title: "", description: "" });
  }

  return (
    <div className="home-container">

      {/* Left Side */}
      <div className="add-todo">
        <h1>Add ToDo</h1>

        <input
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          placeholder="New todo..."
          className='add-input'
        />

        <input
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          placeholder="Description..."
          className='add-input-description'
        />

        <button className='add-todo-btn' onClick={handleAdd}>Add</button>
      </div>

      {/* Right Side */}
      <div className="todo-list">
        <h1>My Last Added 3 ToDo</h1>

        <TodoList
          todos={todos}
          toggle={toggleTodo}
          remove={deleteTodo}
        />
      </div>

    </div>
  );
};
