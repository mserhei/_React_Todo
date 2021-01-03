import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';

import {setCategoryIdList} from '../../../../../redux/actions';
import {addCategory} from '../../../../../redux/actions';
import {changeCategoryName} from '../../../../../redux/actions';
import {deleteCategoryById} from '../../../../../redux/actions';
import {createTask} from '../../../../../redux/actions';

import s from "./SidebarCategoryItem.module.css";

function SidebarCategoryItem({ itemCategory}) {

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

  let [isVisibleCreateTask, setIsVisibleCreateTask] = useState('display_none');
  let [titleCreateTask, setTitleCreateTask] = useState('');

  function showCreateTask () {
    setIsVisibleCreateTask('display_flex')
  }

  function hideCreateTask () {
    setIsVisibleCreateTask('display_none')
    setTitleCreateTask(``);
  }

  function newCreateTask () {
    const newId = uuid();

    dispatch(createTask({
      id: newId,
      title: titleCreateTask,
      description: '',
      completed: false,
      idCategoriesList: itemCategory.idList,
    }))
  }

  // CREATE NESTED CATEGORY

  let [isVisibleCreateCategory, setIsVisibleCreateCategory] = useState('display_none')
  const [titleCreateCaregory, setTitleCreateCategory] = useState(``);

  function showCreateCategory () {
    setIsVisibleCreateCategory('display_flex');
  }

  function hideCreateCategory () {
    setIsVisibleCreateCategory('display_none');
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

  // CHANGE CATEGORY TITLE

  let [isVisibleEditCategory, setIsVisibleEditCategory] = useState('display_none');
  let [newCategoryTitle, setNewCategoryTitle] = useState('');

  function showEditCategory () {
    setIsVisibleEditCategory('display_flex')
  }

  function hideEditCategory () {
    setIsVisibleEditCategory('display_none')
  }

  function changeCategoryTitle() {
    if(newCategoryTitle) {
      dispatch(changeCategoryName({
        categoryId: itemCategory.id,
        newCategoryTitle: newCategoryTitle,
      }));
    } 
  }

  // CHECK CATEGORY DELETION

  let [isVisibleCheckDeletion, setIsVisibleCheckDeletion] = useState('display_none');

  function showCheckDeletion () {
    setIsVisibleCheckDeletion('display_flex')
  }

  function hideCheckDeletion () {
    setIsVisibleCheckDeletion('display_none')
  }

  function deleteCategory () {
      dispatch(deleteCategoryById({
        deletedIdList: itemCategory.idList,
      }));
  }

  return (
    <div className={`${s.category_item} ${s[isVisible]}`}>
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

      <div className={s[isVisibleCreateTask]}>
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

      <div className={s[isVisibleCreateCategory]}>
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

      <div className={s[isVisibleEditCategory]}>
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

      <div 
        className={`${s[isVisibleCheckDeletion]} ${s.check_deletion_block}`}>
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
