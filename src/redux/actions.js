import {CHANGE_TASK, CREATE_TASK} from './types';
import {ADD_CATEGORY} from './types';
import {SET_CATEGORY_ID_LIST} from './types';
import {CHANGE_CATEGORY_NAME} from './types';
import {DELETE_CATEGORY_BY_ID} from './types';
import {TOGGLE_TASK_COMPLETION} from './types';
import {REMOVE_TASK} from './types';
import {SET_SEARCH_DATA} from './types';

export function createTask(task) {
    return {
        type: CREATE_TASK,
        payload: task,
}}

export function addCategory (category) {
    return {
        type: ADD_CATEGORY,
        payload: category,
}}

export function setCategoryIdList (categoryIdList) {
    return {
        type: SET_CATEGORY_ID_LIST,
        payload: categoryIdList,
}}

export function changeCategoryName (newCategoryName) {
    return {
        type: CHANGE_CATEGORY_NAME,
        payload: newCategoryName,
}}

export function deleteCategoryById (deletedIdList) {
    return {
        type: DELETE_CATEGORY_BY_ID,
        payload: deletedIdList,
}}

export function toggleTaskCompletion (newTask) {
    return {
        type: TOGGLE_TASK_COMPLETION,
        payload: newTask,
    }
}

export function removeTask (task) {
    return {
        type: REMOVE_TASK,
        payload: task,
    }
}

export function setSearchData (searchData) {
    return {
        type: SET_SEARCH_DATA,
        payload: searchData,
    }
}

export function changeTask (task) {
    return {
        type: CHANGE_TASK,
        payload: task,
    }
}