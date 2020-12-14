import React from "react";

import s from "./ContentTask.module.css";

const ContentTask = ({ task }) => {
  let completed;
  if (task.completed) {
    completed = "completed0";
  } else {
    completed = "completed1";
  }

  return (
    <div className={`${s.task_block} ${s[completed]}`}>
      <div>
        <input type='checkbox'/>
        <label className={s.task_label}>{task.title}</label>
      </div>
      <div>
        <button
          className={s.action_button}
          // onClick={() => editTask()}
        >
          <i className='fas fa-edit'></i>
        </button>
        <button
          className={s.action_button}
          // onClick={() => deleteTask()}
        >
          <i className='fas fa-trash-alt'></i>
        </button>
      </div>
  </div>
  )
}

export default ContentTask;
