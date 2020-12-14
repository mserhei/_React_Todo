import React from "react";


import SidebarCategoryItem from "./SidebarCategotyItem/SidebarCategoryItem";



const SidebarCategories = ({categoriesList, parentId}) => {

  return (

      <ul style={{ paddingLeft: '30px' }}>
      {categoriesList
        .filter(item => item.parentId === parentId)
        .map(item => (
          <li>
            <SidebarCategoryItem itemCategory={item} key={item.id} />
            <SidebarCategories categoriesList={categoriesList} parentId={item.id}/>
          </li>
      ))}
      
    </ul>

  );
};



export default SidebarCategories;
