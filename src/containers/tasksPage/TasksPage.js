import React, { useState, useEffect } from "react";
import { TaskForm } from "../../components/taskForm/TaskForm";
import { TileList } from "../../components/tileList/TileList";

export const TasksPage = ({ tasks, addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(title, description, date, time, done);
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setDone(false);
  };

  return (
    <>
      <h1 className="title is-1">todolist_</h1>
      <section>
        <h2 className="title">new todo:</h2>
        <TaskForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          done={done}
          setDone={setDone}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2 className="title">todolist_:</h2>
        <TileList tiles={tasks} />
      </section>
    </>
  );
};
