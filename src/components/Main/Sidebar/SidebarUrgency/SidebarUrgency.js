import React from "react";
import SidebarUrgencyItem from "./SidebarUrgencyItem/SidebarUrgencyItem";

import s from "./SidebarUrgency.module.css";

function SidebarUrgency({itemsUrgency}) {

  return (
    <div className={s.sidebar_list}>
      <p className={s.p}>Urgency:</p>
      <ul>
        {itemsUrgency.map((itemUrgency) => <SidebarUrgencyItem itemUrgency={itemUrgency} key={itemUrgency.id}/>)}
      </ul>
    </div>
  );
}

export default SidebarUrgency;
