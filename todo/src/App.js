import "./App.css";
import Header from "./components/header/Header";
import Task from "./components/task/Task";

function App() {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Task />
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Task />
      </div>
    </>
  );
}

export default App;
