import React from "react";

import s from "./SidebarUrgencyItem.module.css";

function SidebarUrgencyItem({ itemUrgency }) {

  return (
    <li>
      <input
        readOnly
        className={s.input_urgency}
        id={`itemUrgency${itemUrgency.id}`}
        type="radio"
        name="itemUrgency"
        checked={itemUrgency.checked}
      />
      <label 
        className={s.label_urgency} 
        htmlFor={`itemUrgency${itemUrgency.id}`}
        >
        {itemUrgency.title}
      </label>
    </li>
  );
}

export default SidebarUrgencyItem;
