import React from "react";

import s from './SidebarUrgency.module.css';

function SidebarUrgency() {
  return (
    <div className={s.sidebar_list}>
      <p className={s.p}>Urgency:</p>
      <ul>
        <li className={s.li}>there is style for li</li>
      </ul>
    </div>
  );
}

export default SidebarUrgency;
