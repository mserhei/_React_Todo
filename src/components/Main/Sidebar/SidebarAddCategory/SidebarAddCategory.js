import React,{useState} from "react";
import {useDispatch} from 'react-redux';

import uuid from 'react-uuid';

import {addCategory} from '../../../../redux/actions';

import s from "./SidebarAddCategory.module.css";

function SidebarAddCategory () {

  const dispatch = useDispatch();
  const [title, setTitle] = useState(``);

  const newId = uuid();

  function createCategory() {
    if(title) {
      dispatch(addCategory({
        parentId: null,
        id: newId,
        title: title,
        parentIdList: [null], 
        idList: [null, newId]
      }))
    }
  }

  return (
    <form 
      onSubmit={(event) => {event.preventDefault(); createCategory(); setTitle('')}}
      className={s.add_category_block}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className={s.add_category__input}
        type="text"
        placeholder="highest level category title"
      />
      <button 
        type='submit'
        className={s.add_category__button}>add</button>
    </form>
  );
};

export default SidebarAddCategory;
