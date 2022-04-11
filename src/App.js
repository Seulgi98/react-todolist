import './styles/App.css';
import React, {Component} from 'react';
import Clock from "./CurrentDate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import InputForm from "./components/InputForm";


class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      {id: 0, text: ' 리액트 소개', checked: false},
      {id: 1, text: ' 리액트 소개', checked: true},
      {id: 2, text: ' 리액트 소개', checked: false}
    ]
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleInputCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleInputCreate();
    }
  }

  render() {
    const { input, todos } = this.state;
    const { //비구조화 할당(this를 붙여주는 작업 생략)
      handleInputChange,
      handleInputCreate,
      handleKeyPress
    } = this;

    return (
      <body>
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
            <InputForm value={input}
                       onKeyPress={handleKeyPress}
                       onChange={handleInputChange}
                       onCreate={handleInputCreate}/>
            <TodoList todos={todos}/> {/*todos안에 객체를 컴포넌트 배열로 변환*/}
          </div>
        </div>
      </div>
      </body>
    );
  }
}

// const App = () => {
//   return (
//     <body>
//     <div className="appContainer">
//       <div className="todoTitle">
//         <p>To do List</p>
//       </div>
//       <div className="todoListContainer">
//         <div className="currentDate">
//           <Clock/>
//         </div>
//         <TodoHeader/>
//         <div className="todoList">
//           <InputForm/>
//           <TodoList/>
//         </div>
//       </div>
//     </div>
//     </body>
//   );
// };

export default App;