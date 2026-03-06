import type { Todo } from '../../models/todo.model';
import { TodoItem } from "./TodoItem";
import './todolist.css';


type Props = {
  todos: Todo[];
  toggle: (id: string) => void;
  remove: (id: string) => void;
  archive?: boolean;
  limit?: number;
};

export const TodoList = ({ todos, toggle, remove, archive, limit }: Props) => {

  let filteredTodos = todos.filter(todo => archive ? todo.completed : !todo.completed);


  if (limit) {
    filteredTodos = filteredTodos.slice(0, limit);
  }

  return (
    <div className={archive ? 'todo-list-archive' : 'todo-list'}>
      {filteredTodos.reverse().map(todo => (
        <div key={todo._id} className='todo-wrapper'>
          <TodoItem todo={todo} toggle={toggle} remove={remove} />
        </div>
      ))}
    </div>
  );
};
