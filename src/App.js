import './styles/App.css';
import React, {useState} from 'react';
import Clock from "./CurrentDate";
import TodoHeader from "./components/TodoHeader";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputState, setInputState] = useState('');
  const [todoState, setTodoState] = useState([
    // {id: 0, text: 'Todo list test', checked: false},
  ]);

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputState(value)
  }

  const handleInputCreate = () => {
    setInputState('')
    setTodoState(
      todoState.concat(
        {
          id: Math.random(),
          text: inputState,
          checked: false,
          done: false,
        }
      )
    )
  }

  const handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      handleInputCreate();
    }
  }

  const handleToggle = (id) => {
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todoState.findIndex(todo => todo.id === id);
    const selected = todoState[index]; // 선택한 객체
    const nextTodos = [...todoState]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    setTodoState(nextTodos);
  }

  const handleInputRemove = (id) => {
    //파라미터로 받아온 id 를 갖고있지 않는 배열 새로 생성
    setTodoState(
      todoState.filter(todo => todo.id !== id)
    );
  }

  return (
    <div className="appContainer">
      <div className="todoTitle">
        <p>To do List</p>
      </div>
      <div className="todoListContainer">
        <div className="currentDate">
          <Clock/>
        </div>
        <TodoHeader/>
        <div className="todoList">
          <InputForm value={inputState}
                     onKeyPress={handleKeyPress}
                     onChange={handleInputChange}
                     onCreate={handleInputCreate}/>
          <TodoList todos={todoState} onToggle={handleToggle}
                    onRemove={handleInputRemove}/> {/*todos안에 객체를 컴포넌트 배열로 변환*/}
        </div>
      </div>
    </div>
  );
};

export default App;