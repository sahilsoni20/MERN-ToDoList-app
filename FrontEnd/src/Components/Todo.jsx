import React, { useState } from "react";
import { toggleTodo, updateTodo, deleteTodo } from "../Redux/Actions/index";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEditing((prevState) => !prevState);

    dispatch(updateTodo(todo._id, text ));
  };

  return (
    <li
      onClick={() => {
        dispatch(toggleTodo(todo._id));
      }}
      style={{
        textDecoration: todo.done ? "line-through" : "",
      }}
    >
      <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>

      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      <div className="right">
        <span
          className="icon"
          onClick={() => setEditing((prevState) => !prevState)}
        >
          <i className="fas fa-pen" />
        </span>

        <span className="icon"
          onClick={() => dispatch(deleteTodo(todo._id))}
        >
          <i className="fas fa-trash" />
        </span>
      </div>
    </li>
  );
};

export default Todo;
