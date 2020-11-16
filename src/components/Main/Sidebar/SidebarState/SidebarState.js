import React from "react";
import SidebarUrgency from "../SidebarUrgency/SidebarUrgency";

import s from './SidebarState.module.css';

console.log(s);

function SidebarState() {
  return (
    <div className={s.sidebar_list}>
      <p className={s.p}>State:</p>
      <ul>
        <li className={s.li}>there is style for li</li> 
      </ul>
    </div>
  );
}

export default SidebarState;
