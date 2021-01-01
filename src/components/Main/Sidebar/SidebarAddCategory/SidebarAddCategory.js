import React,{useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {addCategory} from '../../../../redux/actions';

import s from "./SidebarAddCategory.module.css";

function SidebarAddCategory () {

  const allCategories = useSelector(state => state.categoriesList);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(``);

  function createCategory() {
    if(title) {
      dispatch(addCategory({
        parentId: null,
        id: allCategories.length,
        title: title,
        parentIdList: [null], 
        idList: [null, allCategories.length]
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
