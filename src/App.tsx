import "./App.css";
import InputTask from "./components/InputTask";
import ButtonAddTask from "./components/ButtonAddTask";
import { useState } from "react";
import type { TaskType } from "./types/TaskType";

function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleAddTask = () => {
    alert("Task success add " + taskText);

    const newTask: TaskType = {
      id: tasks.length + 1,
      text: taskText,
      complited: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <div className="taskContainter">
        <InputTask value={taskText} onChange={setTaskText} />
        <ButtonAddTask onClick={handleAddTask} />
        <ul>
          {tasks.map((task) => {
            return <li key={task.id}>{task.text}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
