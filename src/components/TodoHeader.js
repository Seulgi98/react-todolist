import React, { useState} from 'react';
import styled from 'styled-components';

const TodoHeadStyled = styled.div`
  padding: 0 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;

  .todoCount {
    color: #8572ff;
    font-size: 18px;
    margin-top: 10px;
    font-weight: bold;
  }
`;

const TodoHeader = () => {
  const [todoState, setTodoState] = useState([])
  const undoneTasks = () => {
    setTodoState(
      todoState.filter(todo => !todo.checked)
    );
  }
//할 일 개수 구현중..
  return (
    <TodoHeadStyled>
      <div className='todoCount'>할일 {undoneTasks.length}개 남음</div>
    </TodoHeadStyled>
  );
};

export default TodoHeader;
