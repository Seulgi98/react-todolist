import React, { Component } from 'react';
import '../styles/TodoItem.css';

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    //checked : 체크박스 상태
    //id : todo고유아이디
    //onToggle : 체크박스 on/off함수

    return (
      <div className="todoItem" onClick={() => onToggle(id)}>
        <div className="removeItem" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않고 onRemove만 실행됨
          onRemove(id)}
        }>&times;</div>
        <div className={`todoText ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="checkMark">✓</div>)
        }
      </div>
    );
  }
}

export default TodoItem;
