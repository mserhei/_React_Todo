import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import {toggleTaskCompletion} from './../../../../../redux/actions';
import {removeTask} from './../../../../../redux/actions';

import s from "./ContentTask.module.css";

const ContentTask = ({ task, openModal }) => {

  const dispatch = useDispatch();
  const [completed, setCompleted] = useState('');
  
  useEffect(() => {
    if (task.completed) {
      setCompleted('completed1')
    } else {
      setCompleted('completed0')
    }
  }, [task.completed])


  function toggleCompletionTask () {
    dispatch(toggleTaskCompletion(
      task.id
    ));
  }

  function deleteTask () {
    dispatch(removeTask(
      task.id
    ))
  }

  return (
    <div className={`${s.task_block} ${s[completed]}`}>
      <div>

        <button 
          type='button'
            onClick={() => {toggleCompletionTask()}}
          className={s.completed_button}
        >
          {task.completed ? <i className={`far fa-check-circle ${s.completed_input1}`}></i> : <i className={`far fa-circle ${s.completed_input0}`}></i>} 
        </button>
        
        <label className={s.task_label}>{task.title}</label>
      </div>
      <div>
        <button
          title='edit task'
          className={s.action_button}
          onClick={() => 
            openModal(task)
          }
        >
          <i className={`fas fa-edit`}></i>
        </button>
        <button
          title='delete task'
          className={s.action_button}
          onClick={() => deleteTask()}
        >
          <i className={`fas fa-trash-alt`}></i>
        </button>
      </div>
  </div>
  )
}

ContentTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.oneOf([null])
    ]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    idCategoriesList: PropTypes.array.isRequired,
  }),
  openModal: PropTypes.func.isRequired,
}

export default ContentTask;
