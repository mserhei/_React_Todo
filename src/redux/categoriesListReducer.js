import {ADD_CATEGORY, DELETE_CATEGORY_BY_ID} from './types';
import {CHANGE_CATEGORY_NAME} from './types';

const initialState = [
      { id: 1, parentId: null, title: "Category 1", idList: [null, 1]},
      { id: 2, parentId: null, title: "Category 2", idList: [null, 2]},
      { id: 3, parentId: null, title: "Category 3", idList: [null, 3]},
      { id: 31, parentId: 3, title: "Category 3.1", idList: [null, 3, 31]},
      { id: 311, parentId: 31, title: "Category 3.1.1", idList: [null, 3, 31, 311]},
      { id: 32, parentId: 3, title: "Category 3.2", idList: [null, 3, 32]},
      { id: 33, parentId: 3, title: "Category 3.3", idList: [null, 3, 33]},
      { id: 11, parentId: 1, title: "Category 1.1", idList: [null, 1, 11]},
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

        return  state.filter(
          category => action.payload.deletedIdList.filter(
            deletedIdListItem => !(category.idList.indexOf(deletedIdListItem) > -1)).length);
        }

        default: return state;
      }
}
