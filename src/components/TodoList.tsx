import type { Todo } from '../models/todo.model';
import { TodoItem } from "./TodoItem";
import '../styles/todolist.css';


type Props = {
  todos: Todo[];
  toggle: (id: string) => void;
  remove: (id: string) => void;
};

export const TodoList = ({ todos, toggle, remove }: Props) => (
  <div className='todo-list'>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} toggle={toggle} remove={remove} />
    ))}
  </div>
);
