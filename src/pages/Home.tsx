import { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import { TodoList } from "../components/TodoList";
import '../styles/home.css';

export const Home = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [newTitle, setNewTitle] = useState("");

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    addTodo(newTitle);
    setNewTitle("");
  };

  return (
    <div className="p-4">
      <h1>To Do App</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New todo..."
          className='add-input'
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <TodoList todos={todos} toggle={toggleTodo} remove={deleteTodo} />
    </div>
  );
};
