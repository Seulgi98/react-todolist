import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <TodoItem text="할 일 목록1"/>
        <TodoItem text="할 일 목록2"/>
        <TodoItem text="할 일 목록3"/>
      </div>
    );
  }
}

export default TodoItemList;