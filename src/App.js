import { useState } from "react";
import "./App.css";
import { FaPlus, FaTimes } from "react-icons/fa";
function App() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [todo, setTodo] = useState("");
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;
  const submitHandler = () => {
    setTodoTasks([...todoTasks, { id: Date.now(), text: todo, status: false }]);
    console.log(todoTasks);
    setTodo("");
  };
  const handleCheckBox = (id) => {
    setTodoTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };
  const handleDelete =(id)=>{
  setTodoTasks(todoTasks.filter((tode)=>tode.id !== id))

  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Date {date}</h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          type="text"
          placeholder="Add item..."
        />

        {todo && <FaPlus onClick={submitHandler} />}
      </div>
      <div className="todos">
        {todoTasks.map((todo) => (
          <div className="todo" >
            <div className="left">
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => {
                  handleCheckBox(todo.id);
                }}
              />
              <p>{todo.text}</p>
            </div>
            <div>
              <FaTimes onClick={()=>{handleDelete(todo.id)}}/>
            </div>
          </div>
        ))}
        {todoTasks.map((todo) =>
          todo.status ? (
            <h1 key={todo.text} className="checked">
              {todo.text}
            </h1>
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;
