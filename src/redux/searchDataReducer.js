import {SET_SEARCH_DATA} from './types'

const initialState = {
    phrase: '',
    isCompleted: false,
  }


export const searchDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH_DATA:{

          return {
            ...state, ...action.payload
          };
        }
        default: return state;
      }
}