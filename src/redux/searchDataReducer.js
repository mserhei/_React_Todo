import {SET_SEARCH_DATA} from './types'

const initialState = {
    searchData: {
        phrase: '',
        isCompleted: false,
    }
    
}

export const searchDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH_DATA:{

          return {
            ...state,
            searchData: action.payload
          };
        }
        default: return state;
      }
}