import React from "react";
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import ContentTask from "./ContentTask/ContentTask";

import s from "./ContentTasks.module.css";

const ContentTasks = ({openModal}) => {

  const categoryIdList = useSelector(state => state.categoryIdList);
  const allTasks = useSelector(state => state.tasks.filter(
    task => !categoryIdList.filter(
      idElement => !(task.idCategoriesList.indexOf(idElement) > -1)).length));
  const searchData = useSelector(state => state.searchData);

  return (
    <div className={s.content_tasks}>
      {!allTasks.length ? <p className={s.message_no_tasks}>there are no tasks for some reasons. you can create them in the "Categoies" area on the left...</p> : true}
      {allTasks
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

ContentTask.propTypes = {
  openModal: PropTypes.func.isRequired,
}

export default ContentTasks;
