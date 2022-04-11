import './styles/App.css';
import React from 'react';
import Clock from "./CurrentDate";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const App = () => {
  return (
    <body>
    <div className="appContainer">
      <div className="todoTitle">
        <p>To do List</p>
      </div>
      <div className="todoListContainer">
        <div className="currentDate">
          <Clock />
        </div>
        <TodoHeader/>
        <div className="todoList">
          <TodoList/>
        </div>
      </div>
    </div>
    </body>
  );
};

export default App;