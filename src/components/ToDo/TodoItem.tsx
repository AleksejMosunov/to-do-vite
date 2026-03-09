import type { Todo } from '../../models/todo.model';
import './todo.css';


type Props = {
  todo: Todo;
  toggle: (id: string) => void;
  remove: (id: string) => void;
};

export const TodoItem = ({ todo, toggle, remove }: Props) => (
  <div className='todo-item'>
    <div className='todo-item-container'>
      <div style={{ textAlign: 'center' }}>
        <span>ToDo name: </span>
        <span>{todo.title}</span>
      </div>
      <div style={{ textAlign: 'left' }}>
        <span>{todo.description}</span>
      </div>
    </div>
    <div className='todo-btn-container' >
      <button className='todo-btn-completed' onClick={() => toggle(todo._id)}>{todo.completed ? "Undo" : "Mark as completed"}</button>
      <button className='todo-btn-remove' onClick={() => remove(todo._id)}>❌</button>
    </div>
  </div>
);
