import "./App.css";

import TodoList from "./components/todoListComponent/TodoList";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "191b1f",
      }}
    >
      <TodoList />
    </div>
  );
}

export default App;
