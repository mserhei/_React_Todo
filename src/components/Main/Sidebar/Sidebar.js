import React, { useLayoutEffect } from 'react';
import SidebarButton from './SidebarButton/SidebarButton';
import SidebarState from './SidebarState/SidebarState';
import SidebarUrgency from './SidebarUrgency/SidebarUrgency';

import s from './Sidebar.module.css';

function Sidebar () {
    return (
        <div className={s.sidebar}>
            <SidebarState />
            <SidebarUrgency />
            <SidebarButton />
        </div>
    )
}

export default Sidebar;