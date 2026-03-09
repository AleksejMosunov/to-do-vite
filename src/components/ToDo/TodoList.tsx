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

  let filteredTodos = todos
    .filter(todo => archive ? todo.completed : !todo.completed)
    .sort((a, b) => {
      // Сортировка от свежего к старому
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });

  if (limit) {
    filteredTodos = filteredTodos.slice(0, limit);
  }

  return (
    <div className={archive ? 'todo-list-archive' : 'todo-list'}
      style={{ "--cols": limit ? 3 : 2 } as React.CSSProperties}
    >
      {filteredTodos.map(todo => (
        <div key={todo._id} className='todo-wrapper'
          style={{ maxWidth: `${limit ? '' : 300}px` }}
        >
          <TodoItem todo={todo} toggle={toggle} remove={remove} />
        </div>
      ))}
    </div>
  );
};
