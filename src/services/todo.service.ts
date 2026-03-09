import type { Todo } from "../models/todo.model";

export class TodoService {
  private API_URL = import.meta.env.VITE_BACK_URL + "/todos";

  private getToken() {
    return localStorage.getItem("token") || "";
  }

  fetchTodos = async (): Promise<Todo[]> => {
    try {
      const response = await fetch(this.API_URL, {
        headers: { Authorization: `Bearer ${this.getToken()}` },
      });
      if (!response.ok) throw new Error("Failed to fetch todos");
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  addTodo = async (
    title: string,
    description: string,
  ): Promise<Todo | null> => {
    try {
      const response = await fetch(this.API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken()}`,
        },
        body: JSON.stringify({ title, description }),
      });
      if (!response.ok) throw new Error("Failed to add todo");
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  deleteTodo = async (id: string): Promise<boolean> => {
    try {
      const response = await fetch(`${this.API_URL}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${this.getToken()}` },
      });
      if (!response.ok) throw new Error("Failed to delete todo");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  toggleTodo = async (id: string, completed: boolean): Promise<boolean> => {
    try {
      const response = await fetch(`${this.API_URL}/${id}/toggle`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.getToken()}`,
        },
        body: JSON.stringify({ completed: !completed }),
      });
      if (!response.ok) throw new Error("Failed to toggle todo");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
