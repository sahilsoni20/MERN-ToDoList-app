import React from "react";
import { useState } from "react";
import { addNewTodo } from "../Redux/Actions";
import { useDispatch } from "react-redux";

const Form = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault(); 
    dispatch(addNewTodo(text));
    setText('');
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form className="form" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter the task To Do..."
          className="input"
          onChange={onInputChange}
          value={text}
        />
        <button className="btn-footer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 3.5V12.5M12.5 8H3.5"
              stroke="white"
              strokeLinecap="round" 
              strokeLinejoin="round" 
            ></path>
          </svg>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
};

export default Form;
