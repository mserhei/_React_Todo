import React,{useState} from "react";
import {connect} from 'react-redux';
import {addCategory} from '../../../../redux/actions'

import s from "./SidebarAddCategory.module.css";

const SidebarAddCategory = (allCategories) => {

  const [title, setTitle] = useState(``);

  function createCategory() {
    if(title) {
      allCategories.addCategory({
        parentId: null,
        id: allCategories.allCategories.length,
        title: title,
        parentIdList: [null], 
        idList: [null, allCategories.allCategories.length]
      })
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

const mapStateToProps = state => {
  return {
    allCategories: state.categoriesList.categoriesList
  }
}

const mapDispatchToProps = {
  addCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarAddCategory);
