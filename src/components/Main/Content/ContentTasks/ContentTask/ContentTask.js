import React from "react";
import s from "./ContentTask.module.css";

function ContentTask({ task }) {
  let completed;
  if (task.completed) {
    completed = "completed0";
  } else {
    completed = "completed1";
  }

  let deleted;
  if (task.deleted) {
    deleted = "deleted0";
  } else {
    deleted = "deleted1";
  }

  if (!task.description) {
    return (
      <div className={s.task_block}>
        <div className={s.task_title}>
          <p className={s.task_title_p}>{task.title}</p>
        </div>
        <button className={`${s[completed]} ${s.task_button}`}>completed</button>
        <button className={`${s[deleted]} ${s.task_button}`}>deleted</button>
        <button className={`${s.add_description} ${s.task_button}`}>add description</button>
      </div>
    );
  }
  return (
    <div className={s.task_block}>
    <div className={s.task_title}>
      <p className={s.task_title_p}>{task.title}</p>
    </div>
    <button className={`${s[completed]} ${s.task_button}`}>completed</button>
    <button className={`${s[deleted]} ${s.task_button}`}>deleted</button>
    <button className={`${s.change_description} ${s.task_button}`}>change description</button>
    <br/>
    <input className={s.input_description} type='textarea' readOnly value={task.description} />
  </div>
  )
}

export default ContentTask;
