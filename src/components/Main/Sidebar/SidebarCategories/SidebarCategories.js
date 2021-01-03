import React from "react";
import PropTypes from 'prop-types';

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

SidebarCategories.propTypes = {
  categoriesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  parentId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
}

export default SidebarCategories;
