import React from 'react';
import '../styles/InputForm.css';

//텍스트 내용 바뀌면 state 업데이트
// 버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
// 인풋에서 Enter 누르면 버튼을 클릭한것과 동일한 작업진행하기

const InputForm = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="inputForm">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} placeholder={"새로운 할 일"}/>
      <div className="addButton" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default InputForm;

