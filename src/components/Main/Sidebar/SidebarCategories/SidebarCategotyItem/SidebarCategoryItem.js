import React, {useEffect, useState, useRef} from "react";
import {useSelector, useDispatch} from 'react-redux';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';

import {setCategoryIdList} from '../../../../../redux/actions';
import {addCategory} from '../../../../../redux/actions';
import {changeCategoryName} from '../../../../../redux/actions';
import {deleteCategoryById} from '../../../../../redux/actions';
import {createTask} from '../../../../../redux/actions';

import s from "./SidebarCategoryItem.module.css";

function SidebarCategoryItem({ itemCategory, clickTarget}) {

  let categoryIdList  = useSelector(state => state.categoryIdList);
  const dispatch = useDispatch();

  // CATEGORIES MAPPING

  let [isVisible, setIsVisible] = useState(`display_flex`);

  function dispatchIdList () {
    dispatch(setCategoryIdList(itemCategory.idList))
  }

  useEffect(() => {
    setIsVisible(`display_none`);

    for(let i = 0; i < itemCategory.idList.length; i++) {
      if (itemCategory.idList[itemCategory.idList.length - 2] === categoryIdList[i]) {
          setIsVisible(`display_flex`)
        }
      }
    }, [categoryIdList, itemCategory.idList]);

  // CREATE NESTED TASK

  const [isOpenCreateTask, setIsOpenCreateTask] = useState(false);

  let [titleCreateTask, setTitleCreateTask] = useState('');

  function showCreateTask () {
    setIsOpenCreateTask(true)
  }

  function hideCreateTask () {
    setIsOpenCreateTask(false)
    setTitleCreateTask(``);
  }

  function newCreateTask () {
    const newId = uuid();

    if(titleCreateTask) {
      dispatch(createTask({
        id: newId,
        title: titleCreateTask,
        description: '',
        completed: false,
        idCategoriesList: itemCategory.idList,
      }))
    }
  }

  // CREATE NESTED TASK - AUTO CLOSING

  const refCreateTask = useRef();
 
  useEffect(() => {
      if (refCreateTask.current !== undefined && refCreateTask.current !== null) {
        if(!refCreateTask.current.contains(clickTarget)) {
          setIsOpenCreateTask(false);
          setTitleCreateTask('');
        }
      }
  }, [clickTarget]);

  // CREATE NESTED CATEGORY

  let [isOpenCreateCategory, setIsOpenCreateCategory] = useState(false);
  const [titleCreateCaregory, setTitleCreateCategory] = useState(``);

  function showCreateCategory () {
    setIsOpenCreateCategory(true);
  }

  function hideCreateCategory () {
    setIsOpenCreateCategory(false);
    setTitleCreateCategory(``);
  }

  function createNestedCategory() {

    const newId = uuid();

    if(titleCreateCaregory) {
      dispatch(addCategory({
        id: newId,
        parentId: itemCategory.id,
        title: titleCreateCaregory,
        idList: [...itemCategory.idList, newId],
      }))
    }  
  }

  // CREATE NESTED CATEGORY - AUTO CLOSING

  const refCreateCategory = useRef();
 
  useEffect(() => {
      if (refCreateCategory.current !== undefined && refCreateCategory.current !== null) {
        if(!refCreateCategory.current.contains(clickTarget)) {
          setIsOpenCreateCategory(false);
          setTitleCreateCategory('');
        }
      }
  }, [clickTarget]);

  // CHANGE CATEGORY TITLE

  let [isOpenEditCategory, setIsOpenEditCategory] = useState(false);
  let [newCategoryTitle, setNewCategoryTitle] = useState('');

  function showEditCategory () {
    setIsOpenEditCategory(true)
  }

  function hideEditCategory () {
    setIsOpenEditCategory(false)
  }

  function changeCategoryTitle() {
    if(newCategoryTitle) {
      dispatch(changeCategoryName({
        categoryId: itemCategory.id,
        newCategoryTitle: newCategoryTitle,
      }));
    } 
  }

  // CHANGE CATEGORY TITLE -AUTO CLOSING

  const refEditCategory = useRef();
 
  useEffect(() => {
      if (refEditCategory.current !== undefined && refEditCategory.current !== null) {
        if(!refEditCategory.current.contains(clickTarget)) {
          setIsOpenEditCategory(false);
          setNewCategoryTitle('');
        }
      }
  }, [clickTarget]);

  // CHECK CATEGORY DELETION

  let [isOpenCheckDeletion, setIsOpenCheckDeletion] = useState(false);

  function showCheckDeletion () {
    setIsOpenCheckDeletion(true)
  }

  function hideCheckDeletion () {
    setIsOpenCheckDeletion(false);
  }

  function deleteCategory () {
      dispatch(deleteCategoryById({
        deletedIdList: itemCategory.idList,
      }));
  }

  // CATCHING CLICK TO CLOSE FORMs

  const refDeleteCategory = useRef();

  useEffect(() => {
    if (refDeleteCategory.current !== undefined && refDeleteCategory.current !== null) {
      if(!refDeleteCategory.current.contains(clickTarget)) {
        setIsOpenCheckDeletion(false)
      }
    }
}, [clickTarget]);
  



  return (
    <div
      className={`${s.category_item} ${s[isVisible]}`}>
      <div className={s.category_main_block}>
        <div>
          <div 
            className={s.category_name_block}
            onClick={() => dispatchIdList()}>
            {itemCategory.title}
          </div>
        </div> 

        <div >

          <button 
            title='add new task'
            className={s.category_button}
            onClick={() => showCreateTask()}>
            <i className='far fa-calendar-plus'></i>
          </button>
          <button
            title='add new nested category'
            className={s.category_button}
            onClick={() => showCreateCategory()}>
            <i className='fas fa-calendar-plus'></i>
          </button>
          <button
            title='edit category'
            className={s.category_button}
            onClick={() => showEditCategory()}>
            <i className='fas fa-edit'></i>
          </button>
          <button
            title='delete category'
            className={s.category_button}
            onClick={() => showCheckDeletion()}>
            <i className='fas fa-trash-alt'></i>
          </button>
          
        </div>
      </div>

      {isOpenCreateTask ? 
        <div ref={refCreateTask}>
          <form
            onSubmit={(event) => {event.preventDefault(); newCreateTask(); hideCreateTask()}}
            className={s.create_nested_task_form}
          > 
            <button 
              type='button'
              onClick={() => hideCreateTask()}
              className={s.create_nested_task_button_cancel}
            ><i className="fas fa-times"></i></button>
            <input
              value={titleCreateTask}
              onChange={(event) => setTitleCreateTask(event.target.value)}
              className={s.create_nested_task_input}
              type="text"
              placeholder="new nested task title"
            />
            <button 
              type='submit'
              className={s.create_nested_task_button_add}
            ><i className="fas fa-check"></i></button>
          </form>
        </div>
      : true}
      
      {isOpenCreateCategory ? 
        <div ref={refCreateCategory}>
          <form 
            onSubmit={(event) => {event.preventDefault(); hideCreateCategory(); createNestedCategory()}}
            className={s.create_nested_category_form}
          > 
            <button 
              onClick={() => hideCreateCategory()}
              type='button'
              className={s.create_nested_category_button_cancel}
            ><i className="fas fa-times"></i></button>
            <input
              value={titleCreateCaregory}
              onChange={(event) => setTitleCreateCategory(event.target.value)}
              className={s.create_nested_category_input}
              type="text"
              placeholder="new nested category title"
            />
            <button 
              type='submit'
              className={s.create_nested_category_button_add}
            ><i className="fas fa-check"></i></button>
          </form>
        </div>
      : true}
      
      {isOpenEditCategory ? 
        <div ref={refEditCategory}>
          <form 
            onSubmit={(event) => {event.preventDefault(); changeCategoryTitle(); hideEditCategory()}}
            className={s.change_category_name_form}
          >
            <button 
              type='button'
              onClick={() => hideEditCategory()}
              className={s.change_category_name_button_cancel}
            ><i className="fas fa-times"></i></button>
            <input
              value={newCategoryTitle}
              onChange={(event) => setNewCategoryTitle(event.target.value)}
              className={s.change_category_name_input}
              type="text"
              placeholder="change category name"
            />
            <button 
              type='submit'
              className={s.change_category_name_button_change}
            ><i className="fas fa-check"></i></button>
          </form>
        </div>
      : true}
      
      {isOpenCheckDeletion ? 
        <div ref={refDeleteCategory}>
          <div className={s.check_category_deletion_question}>
            <p>this will remove all nested categories and tasks. are you sure?</p>
          </div>
        
          <div>
            <button 
              onClick={() => hideCheckDeletion()}
              className={s.check_category_deletion_button_no}
            ><i className="fas fa-times"></i></button>
            <button 
              onClick={() => {hideCheckDeletion(); deleteCategory()}}
              className={s.check_category_deletion_button_yes}
            ><i className="fas fa-check"></i></button>
          </div>
        </div>
      : true}
      
    </div>
  );
}

SidebarCategoryItem.propTypes = {
  itemCategory: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.oneOf([null]),
    ]),
    parentId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.oneOf([null]),
    ]),
    title: PropTypes.string.isRequired,
    idList: PropTypes.array.isRequired,
  })
}

export default SidebarCategoryItem;
