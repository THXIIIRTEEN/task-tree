import { useState } from "react";
import { taskStore } from "./stores/TaskStore";
import { Task } from "./stores/TaskStore";
import TaskList from "./components/TaskList";
import "./styles/styles.scss";

const App: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState(""); 

  const createNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (taskTitle.trim()) {
      const newTask = new Task(Date.now(), taskTitle);
      taskStore.addTask(newTask);
      setTaskTitle(""); 
    }
  }

  return (
    <>
      <form onSubmit={createNewTask}>
        <input
          placeholder="Введите название задачи"
          type="text"
          value={taskTitle} 
          onChange={(e) => setTaskTitle(e.target.value)} 
        />
        <button type="submit">Добавить</button>
      </form>

      <TaskList />
    </>
  );
};

export default App;
