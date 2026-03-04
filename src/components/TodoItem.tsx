import type { Todo } from '../models/todo.model';
import '../styles/todo.css';


type Props = {
  todo: Todo;
  toggle: (id: string) => void;
  remove: (id: string) => void;
};

export const TodoItem = ({ todo, toggle, remove }: Props) => (
  <div className='todo-item'>
    <span
      onClick={() => toggle(todo.id)}
      style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
    >
      {todo.title}
    </span>
    <button onClick={() => remove(todo.id)}>❌</button>
  </div>
);
