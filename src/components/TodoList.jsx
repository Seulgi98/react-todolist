import React from 'react';
import TodoItem from './TodoItem';


const TodoItemList = (props) => {
  const { todos, onToggle, onRemove } = props;
  //props 종류
  //todos : todo 객체들이 들어있는 배열
  //onToggle : 체크박스 on/off함수
  //onRemove : todo item remove 함수

  //객체 값 모두 props로 전달
  //todos 배열을 컴포넌트 배열로 변환
  const todoList = todos.map(
    ({id, text, checked, done}) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        done = {done}
        key={id}
      />
    )
  );
  return (
    <div>
      {todoList}
    </div>
  );
};

export default TodoItemList;