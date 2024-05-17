// TodoItem.js
import React from 'react';

function TodoItem({ todo, onDelete }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} />
        {todo.title}
      </label>
      <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
