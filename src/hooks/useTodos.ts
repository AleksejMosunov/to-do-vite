import { useState, useEffect } from "react";

import { fetchTodos, saveTodos } from "../api/todos";
import type { Todo } from "../models/todo.model";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos(fetchTodos());
  }, []);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      status: "New",
    };
    const updated = [...todos, newTodo];
    setTodos(updated);
    saveTodos(updated);
  };

  const toggleTodo = (id: string) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updated);
    saveTodos(updated);
  };

  const deleteTodo = (id: string) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
    saveTodos(updated);
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
};
