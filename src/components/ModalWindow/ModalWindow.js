import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import {changeTask} from './../../redux/actions';

import s from './ModalWindow.module.css';
import modalStyles from './modalStyles';

Modal.setAppElement('#root');

function ModalWindow ({taskForModal, isOpenedModal}) {

  // GETTING A TASK THROUGH PROPS

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  function openModal () {
      setModalIsOpen(true);
  }

  useEffect(() => {
    if(counter > 0) {
      setNewTitle(taskForModal.title);
      setNewDescription(taskForModal.description);
      setIsCompleted(taskForModal.completed);
      openModal();
    }
    setCounter(prev => prev + 1);
  }, [isOpenedModal])

  // CHANGED TASK DISPATCHING

  let [newTitle, setNewTitle] = useState(taskForModal.title);
  let [newDescription, setNewDescription] = useState(taskForModal.description);
  let [isCompleted, setIsCompleted] = useState(taskForModal.completed);

  const dispatch = useDispatch();
  function dispatchChangeTask () {
    dispatch(changeTask({
      id: taskForModal.id,
      title: newTitle,
      description: newDescription,
      completed: isCompleted,
      idCategoriesList: taskForModal.idCategoriesList,
    }))
  }

  // VISIBILITY OF MESSAGE NO_TASK_TITLE

  let [isTaskTitle, setIsTaskTitle] = useState(!!taskForModal.title);

  useEffect(() => {
    setIsTaskTitle(!!newTitle)
  }, [newTitle])

    return (
        <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={() => setModalIsOpen(false)}
          style={modalStyles}>
            
          <form 
            onSubmit={(e) => {e.preventDefault(); dispatchChangeTask(); setModalIsOpen(false)}}
            className={s.modal_form}>

              <div className={s.buttons_block}>
                <button type='button' className={s.close_modal_button} onClick={() => {setModalIsOpen(false)}}>Cancel</button>
                <button type='submit' className={s.submit_modal_button}>Save changes</button>
              </div>

              <div className={s.new_title_block}>
                <p className={s.new_title_p}>New title for task: </p>
                <input 
                  value={newTitle}
                  onChange={(event) => {setNewTitle(event.target.value); event.target.value ? setIsTaskTitle(true) : setIsTaskTitle(false)}}
                  className={s.new_task_input} type='text' placeholder={taskForModal.title ? `previous title: ${taskForModal.title}` : 'no previous title'}></input>
                {isTaskTitle ? null : <p className={s.message_no_title}>No title. Are you sure?</p>}
              </div>

              <div className={s.task_done_block}>
                <input type='checkbox' checked={isCompleted} onChange={() => setIsCompleted(!isCompleted)}/>
                <span>Done</span>
              </div>

              <div className={s.task_description}>
                <p>Description edition: </p>
                <input 
                  value={newDescription}
                  onChange={(event) => {setNewDescription(event.target.value)}}
                  placeholder={`previous description: ${taskForModal.description ? taskForModal.description : `no description`}`}
                  type='textarea'/>
              </div>

          </form>
        </Modal>
    )
}

ModalWindow.propTypes = {

  taskForModal: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.oneOf([null])
    ]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    idCategoriesList: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.oneOf([null]),
    ])
  }).isRequired,
  isOpenedModal: PropTypes.bool.isRequired,
}

export default ModalWindow ;