import React, { useState } from "react";
import logo from "./logo.svg";
import { TasksPage, tasksPage } from "./containers/tasksPage/TasksPage";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description, date, time, done) => {
    setTasks([
      ...tasks,
      {
        title: title,
        description: description,
        date: date,
        time: time,
        done: done,
      },
    ]);
  };

  return (
    <>
      <nav>Navbar</nav>
      <main>
        <TasksPage tasks={tasks} addTask={addTask} />
      </main>
    </>
  );
}

export default App;
