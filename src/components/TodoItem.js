import React from 'react';
import '../styles/TodoItem.css';

const TodoItem = (props) => {
  const { text, checked, id, onToggle, onRemove } = props;

  return (
    <div className="todoItem" onClick={() => onToggle(id)}>
      <div className="removeItem" onClick={(e) => {
        e.stopPropagation(); // onToggle 이 실행되지 않고 onRemove만 실행됨
        onRemove(id)} //&times : X 표시
      }>&times;</div>
      {/*css 유동적으로 설정 - Template literals */}
      <div className={`todoText ${checked && 'checked'}`}>
        <div>{text}</div>
      </div>
      {
        checked && (<div className="checkMark">✓</div>)
      }
    </div>
  );
};

export default TodoItem;