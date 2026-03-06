import { useState, useEffect } from "react";
import type { Todo } from "../models/todo.model";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const API_URL = import.meta.env.VITE_BACK_URL + "/todos";

  const token = localStorage.getItem("token");

  const fetchTodos = async (): Promise<Todo[]> => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await fetchTodos();
      setTodos(todos);
    };
    loadTodos();
  }, []);

  const addTodo = async (title: string, description: string, token: string) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) throw new Error("Failed to add todo");

      const createdTodo: Todo = await response.json();
      setTodos((prev) => [...prev, createdTodo]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to delete todo");

      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTodo = async (id: string) => {
    try {
      const todo = todos.find((t) => t._id === id);
      if (!todo) throw new Error("Todo not found");

      const response = await fetch(`${API_URL}/${id}/toggle`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ completed: !todo.completed }),
      });

      if (!response.ok) throw new Error("Failed to toggle todo");

      setTodos((prev) =>
        prev.map((t) => (t._id === id ? { ...t, completed: !t.completed } : t)),
      );
    } catch (error) {
      console.error(error);
    }
  };

  return { todos, addTodo, deleteTodo, toggleTodo };
};
