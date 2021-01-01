import React from 'react';

import SidebarAddCategory from './SidebarAddCategory/SidebarAddCategory'
import SidebarCategories from './SidebarCategories/SidebarCategories';

import s from './Sidebar.module.css';
import {useSelector} from 'react-redux';

function Sidebar () {

    const categoriesList = useSelector(state => state.categoriesList);
    const parentId = null;

    return (
        <div className={s.sidebar}>
            <SidebarAddCategory />

            <div className={s.sidebar_list}>
                {categoriesList.length === 0 ? 
                    <p>there are no categories for some reasons. you can create them in the form above...</p> : 
                    <SidebarCategories categoriesList={categoriesList} parentId={parentId}/>}
            </div>

        </div>
    )
}

export default Sidebar;