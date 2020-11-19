import React from "react";

import ContentTask from "./ContentTask/ContentTask";
import s from "./ContentTasks.module.css";

function ContentTasks({ tasks }) {
  if (!tasks.tasks.length) {
    return (
      <div className={s.content_tasks}>
        <p>No tasks</p>
      </div>
    );
  }

  return (
    <div className={s.content_tasks}>
      {tasks.tasks.map((task) => (
        <ContentTask task={task} key={task.id} />
      ))}
    </div>
  );
}

export default ContentTasks;
