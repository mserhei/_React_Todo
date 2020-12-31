import React, { useEffect } from "react";
import {useSelector} from 'react-redux';

import ContentTask from "./ContentTask/ContentTask";
import s from "./ContentTasks.module.css";

const ContentTasks = ({openModal}) => {

  let categoryIdList = useSelector(state => state.categoryIdList.categoryIdList);
  let allTasks = useSelector(state => state.tasks.tasks);
  let searchData = useSelector(state => state.searchData.searchData);

  if (!allTasks.length) {
    return (
      <div className={s.content_tasks}>
        <p>No tasks</p>
      </div>
    );
  };

  return (
    <div className={s.content_tasks}>
      {allTasks
        .filter(task => task.idCategoriesList.includes(categoryIdList[categoryIdList.length - 1]))
        .filter(task => task.title.toLowerCase().includes(searchData.phrase.toLowerCase()))
        .filter(task => {
          if (searchData.isCompleted) {
            return task.completed
          }
          return true;
        })  
        .map((task) => (
        <ContentTask openModal={openModal} task={task} key={task.id} />
      ))}
    </div>    
  );
}

export default ContentTasks;
