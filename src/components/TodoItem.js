import React, { Component } from 'react';
import '../styles/TodoItem.css';

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    //props 종류
    //checked : 체크박스 상태
    //id : todo고유아이디
    //onToggle : 체크박스 on/off함수

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
  }
}

export default TodoItem;
