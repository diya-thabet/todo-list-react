import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1 className="title">Todo List</h1>
        <div className="options">
          <button>todos</button>

          <button>done</button>

          <button>in progress</button>
        </div>
      </div>
      <hr />
    </>
  );
}
