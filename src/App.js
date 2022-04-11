import './styles/App.css';
import React, {Component} from 'react';
import Clock from "./CurrentDate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import InputForm from "./components/InputForm";


class App extends Component {

  id = 0

  state = {
    input: '',
    todos: [
      // {id: 0, text: 'Todo list test', checked: false},
      // {id: 1, text: 'Todo list test2', checked: true},
      // {id: 2, text: 'Todo list test3', checked: false}
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

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleInputRemove = (id) => {
    //파라미터로 받아온 id 를 갖고있지 않는 배열 새로 생성
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const { //비구조화 할당(this를 붙여주는 작업 생략)
      handleInputChange,
      handleInputCreate,
      handleKeyPress,
      handleToggle,
      handleInputRemove
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
            <TodoList todos={todos} onToggle={handleToggle} onRemove={handleInputRemove}/> {/*todos안에 객체를 컴포넌트 배열로 변환*/}
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