import { useState } from 'react';

const TodoFormEdit = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const changeHandler = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(value, task.id);
    setValue('');
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        key={task.id}
        type="text"
        className="todo-input"
        placeholder="Update Task..."
        onChange={changeHandler}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default TodoFormEdit;
