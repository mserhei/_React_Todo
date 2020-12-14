import {SET_CATEGORY_ID_LIST} from './types'

const initialState = {
  categoryIdList: [null]
}

export const categoryIdListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORY_ID_LIST:{
          return {categoryIdList: action.payload}
        }
        default: return state;
      }
}