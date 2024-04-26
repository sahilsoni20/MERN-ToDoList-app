import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getAllTodos } from "../Redux/Actions/index";
import Todo from "./Todo";
import Tabs from "./Tabs";
import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from "../Redux/Actions/type";

const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    }
  };

  const removeDoneTodos = () => {
    todos.forEach(({ done, _id }) => {
        if (done) {
            dispatch(deleteTodo(_id));
        }
    });
  }

  return (
    <div>
      <article>
        <div className="buttons">
          <Tabs currentTab={currentTab} />

          {todos.some((todo) => todo.done) ? (
            <button className="btn-remove btn-tab" onClick={removeDoneTodos}>
              {" "}
              Remove All ToDos{" "}
            </button>
          ) : (
            null
          )}
        </div>
        
        <ul>
          {getTodos().map((todo) => {
            return <Todo key={todo._id} todo={todo} />;
          })}
        </ul>
      </article>
    </div>
  );
};

export default Todos;
