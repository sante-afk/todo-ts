import "./App.css";
import InputTask from "./components/InputTask";
import ButtonAddTask from "./components/ButtonAddTask";


function App() {
  return (
    <>
      <div className="taskContainter">
        <InputTask />
        <ButtonAddTask />
      </div>
    </>
  );
}

export default App;