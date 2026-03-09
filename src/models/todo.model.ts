// Todo для создания
export type CreateTodo = {
  title: string;
  description: string;
};

// Todo с _id от сервера
export type Todo = CreateTodo & {
  _id: string;
  completed: boolean;
  status: string;
  createdAt?: string;
  updatedAt?: string;
};
