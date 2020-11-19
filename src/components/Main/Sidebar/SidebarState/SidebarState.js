import React,{useState} from "react";
import SidebarStateItem from './SidebarStateItem/SidebarStateItem'

import s from './SidebarState.module.css';

function SidebarState({itemsState}) {

  return (
    <div className={s.sidebar_list}>
      <p className={s.p}>State:</p>
      <ul>
        {itemsState.map((itemState) => <SidebarStateItem itemState={itemState} key={itemState.id}/>)}
      </ul>
    </div>
  );
}

export default SidebarState;
