import React from "react";
import s from './SidebarStateItem.module.css';

function SidebarStateItem({ itemState }) {

  return (

    <li>
      <input
        className={s.input_state}
        id={`itemState${itemState.id}`}
        type="radio"
        name="itemState"
      />
      <label 
        className={s.label_state}
        htmlFor={`itemState${itemState.id}`}>
        {itemState.title}
      </label>
    </li>
  );
}

export default SidebarStateItem;
