import { useState } from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  //   const inputTextHandler = () => {
  //   };

  const [alertWarning, setAlertWarning] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const submitTodoHandler = (e) => {
    e.preventDefault();

    const isEmpty = (str) => !str.trim().length;
    if (isEmpty(inputText)) {
      setAlertWarning(true);
      setTimeout(() => {
        setAlertWarning(false);
      }, 1500);
    } else {
      setAlertSuccess(true);
      setTimeout(() => {
        setAlertSuccess(false);
      }, 1500);
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() },
      ]);
    }

    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <div className="search">
        <input
          type="text"
          className="todo-input"
          placeholder="Add..."
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>

      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <div className="alert-wrapper">
        {alertWarning ? (
          <div className="alert-warning">
            <div>This field cannot be empty!</div>
          </div>
        ) : (
          ""
        )}
        {alertSuccess ? (
          <div className="alert-success">
            <div>Success</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default Form;
