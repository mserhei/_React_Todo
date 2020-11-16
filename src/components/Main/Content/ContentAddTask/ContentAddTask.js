import React from "react";

import s from './ContentAddTask.module.css';

function ContentAddTask() {
  return (
    <div className={s.content_add_task}>
      <form>
        <label>Task name:</label>
        <br />
        <input className={s.input} type="textarea" placeholder='there is style for input'></input>
        <br />
        <button className={`{s.button} default_button`}>Cancel (style?)</button>
        <button className="default_button">Save (style?)</button>
      </form>
    </div>
  );
}

export default ContentAddTask;
