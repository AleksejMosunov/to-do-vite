import type { Todo } from '../../models/todo.model';
import { TodoItem } from "./TodoItem";
import './todolist.css';


type Props = {
  todos: Todo[];
  toggle: (id: string) => void;
  remove: (id: string) => void;
  archive?: boolean;
};

export const TodoList = ({ todos, toggle, remove, archive }: Props) => (
  <div className='todo-list'>
    {[...todos]
      .filter(todo => archive ? todo.completed : !todo.completed)
      .reverse().slice(0, 3)
      .map(todo => (
        <div key={todo._id} className='todo-wrapper'>
          <TodoItem todo={todo} toggle={toggle} remove={remove} />
        </div>
      ))}
  </div>
);
