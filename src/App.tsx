import "./App.css";
import InputTask from "./components/InputTask";
import ButtonAddTask from "./components/ButtonAddTask";
import { useEffect, useState } from "react";
import type { TaskType } from "./types/TaskType";

function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const saveLocalTasks = localStorage.getItem("tasks");
    if (saveLocalTasks) {
      return JSON.parse(saveLocalTasks);
    }
    return [];
  });

  const handleAddTask = () => {
    const newTask: TaskType = {
      id: tasks.length + 1,
      text: taskText,
      complited: false,
    };

    if (!newTask.text) {
      alert("Enter to task");
    }

    if (newTask.text) {
      alert("Task success add " + taskText);
      setTasks([...tasks, newTask]);
    }

  };

  const handleDelTask = (taskId: number) => {
    setTasks(tasks => tasks.filter(task => task.id !== taskId));
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <>
      <div className="taskContainter">
        <div className="taskHeader">
          <InputTask value={taskText} onChange={setTaskText} />
          <ButtonAddTask onClick={handleAddTask} />
        </div>
        <ul className="taskList">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="task">{task.text}
                <button className="deleteTask" onClick={() => { handleDelTask(task.id) }}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
