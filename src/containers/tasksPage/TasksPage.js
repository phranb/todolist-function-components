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
      <h1 className="title is-1 has-text-white main-title">todolist_</h1>
      <div className="columns">
        <div className="column is-half">
          <section className="section">
            <div className="box">
              <h2 className="title is-2">new to do:</h2>
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
            </div>
          </section>
        </div>

        <br />
        <div className="column is-half">
          <section className="section">
            <div className="box">
              <h2 className="title is-2">to do list:</h2>
              <TileList tiles={tasks} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
