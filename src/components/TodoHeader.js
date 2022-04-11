import React from 'react';
import styled from 'styled-components';
import Clock from "../CurrentDate";

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
  return (
    <TodoHeadStyled>
      <div className="todoCount">
        할 일 2개 남음
      </div>
    </TodoHeadStyled>
  );
};

export default TodoHeader;
