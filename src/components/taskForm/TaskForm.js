import React from "react";

export const TaskForm = ({
  handleSubmit,
  title,
  setTitle,
  description,
  setDescription,
  date,
  setDate,
  time,
  setTime,
  done,
  setDone,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          className="input"
        />
      </label>
      <label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description"
          className="textarea"
        />
      </label>
      <label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          placeholder="Date"
          className="input"
        />
      </label>
      <label>
        <input
          type="time"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          placeholder="Time"
          className="input"
        />
      </label>
      {/* <select done={done}>
        <option value="false">Done</option>
      </select> */}
      <input type="submit" value="Add Todo" className="button is-success" />
    </form>
  );
};
