import { create } from "zustand";
import type { Todo } from "../models/todo.model";
import { TodoService } from "../services/todo.service";

type TodoStore = {
  todos: Todo[];
  loadTodos: () => Promise<void>;
  addTodo: (title: string, description: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  toggleTodo: (id: string) => Promise<void>;
};

const todoService = new TodoService();

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],

  loadTodos: async () => {
    const todos = await todoService.fetchTodos();
    set({ todos });
  },

  addTodo: async (title, description) => {
    const newTodo = await todoService.addTodo(title, description);
    if (newTodo) {
      set((state) => ({ todos: [...state.todos, newTodo] }));
    }
  },

  deleteTodo: async (id) => {
    const success = await todoService.deleteTodo(id);
    if (success) {
      set((state) => ({ todos: state.todos.filter((t) => t._id !== id) }));
    }
  },

  toggleTodo: async (id) => {
    const todos = get().todos; // берём текущее состояние
    const todo = todos.find((t) => t._id === id);
    if (!todo) return;
    const success = await todoService.toggleTodo(id, todo.completed);
    if (success) {
      set((state) => ({
        todos: state.todos.map((t) =>
          t._id === id ? { ...t, completed: !t.completed } : t,
        ),
      }));
    }
  },
}));
