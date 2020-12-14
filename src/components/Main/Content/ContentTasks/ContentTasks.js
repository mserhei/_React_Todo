import React from "react";
import {connect} from 'react-redux';

import ContentTask from "./ContentTask/ContentTask";
import s from "./ContentTasks.module.css";

const ContentTasks = ({ allTasks }) => {
  if (!allTasks.length) {
    return (
      <div className={s.content_tasks}>
        <p>No tasks</p>
      </div>
    );
  }

  return (
    <div className={s.content_tasks}>
      {allTasks.map((task) => (
        <ContentTask task={task} key={task.id} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    allTasks: state.tasks.tasks
  }
}

export default connect(mapStateToProps, null)(ContentTasks) ;
