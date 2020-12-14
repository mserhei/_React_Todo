import {combineReducers} from 'redux';

import { tasksReducer } from './tasksReducer';
import { categoriesListReducer } from './categoriesListReducer';
import {categoryIdListReducer} from './categoryIdListReducer';

export const rootReducer = combineReducers({
    tasks: tasksReducer,
    categoriesList: categoriesListReducer,
    categoryIdList : categoryIdListReducer,
})