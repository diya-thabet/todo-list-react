import "./task.css";

export default function Task() {
  return (
    <>
      <div className="task">
        <h3 className="task-title">title</h3>
        <hr />
        <div>
          <p className="task-details">
            this is the task description and it gonna be filled with information
            related to the current task
          </p>
        </div>
      </div>
    </>
  );
}
