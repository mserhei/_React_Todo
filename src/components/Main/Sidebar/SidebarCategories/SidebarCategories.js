import React from "react";


import SidebarCategoryItem from "./SidebarCategotyItem/SidebarCategoryItem";



const SidebarCategories = ({categoriesList, parentId}) => {

  return (

      <ul style={{ paddingLeft: '20px' }}>
      {categoriesList
        .filter(item => item.parentId === parentId)
        .map(item => (
          <li key={item.id} >
            <SidebarCategoryItem itemCategory={item} />
            <SidebarCategories categoriesList={categoriesList} parentId={item.id}/>
          </li>
      ))}
      
    </ul>

  );
};



export default SidebarCategories;
