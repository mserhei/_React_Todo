import {SET_CATEGORY_ID_LIST} from './types'

const initialState = [null]

export const categoryIdListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORY_ID_LIST:{
          return action.payload
        }
        default: return state;
      }
}