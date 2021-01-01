import {ADD_CATEGORY, DELETE_CATEGORY_BY_ID} from './types';
import {CHANGE_CATEGORY_NAME} from './types';

const initialState = [
      { id: 1, parentId: null, title: "Category 1", parentIdList: [null], idList: [null, 1]},
      { id: 2, parentId: null, title: "Category 2", parentIdList: [null], idList: [null, 2]},
      { id: 3, parentId: null, title: "Category 3", parentIdList: [null], idList: [null, 3]},
      { id: 31, parentId: 3, title: "Category 3.1", parentIdList: [null, 3], idList: [null, 3, 31]},
      { id: 311, parentId: 31, title: "Category 3.1.1", parentIdList: [null, 3, 31], idList: [null, 3, 31, 311]},
      { id: 32, parentId: 3, title: "Category 3.2", parentIdList: [null, 3], idList: [null, 3, 32]},
      { id: 33, parentId: 3, title: "Category 3.3", parentIdList: [null, 3], idList: [null, 3, 33]},
      { id: 11, parentId: 1, title: "Category 1.1", parentIdList: [null, 1], idList: [null, 1, 11]}
      ]

export const categoriesListReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CATEGORY:{
          return state.concat(action.payload);
        }
        case CHANGE_CATEGORY_NAME: {
          state.forEach(item => {
            if (item.id === action.payload.categoryId) {
              item.title = action.payload.newCategoryTitle
            }})
          return state;
        }

        case DELETE_CATEGORY_BY_ID: {
          let deletedItemsIndexArray = [];
          
          state.forEach(item => {
            let counter = 0;
            for (let i = 0; i < action.payload.deletedIdList.length; i++) {
              if(item.idList.includes(action.payload.deletedIdList[i])) {
                  counter = counter + 1;
                }
            }
            if (counter === action.payload.deletedIdList.length) {
              deletedItemsIndexArray.push(state.indexOf(item));
            }
          })
          for (let i = 0; i < deletedItemsIndexArray.length; i++) {
            delete state[deletedItemsIndexArray[i]];
          }
          
          state = state.filter(item => {
            return item !== String;
          })
          return state;
        }

        default: return state;
      }
}
