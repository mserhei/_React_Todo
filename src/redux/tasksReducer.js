import { CREATE_TASK } from "./types";
import { TOGGLE_TASK_COMPLETION } from './types';
import { REMOVE_TASK } from './types';
import { CHANGE_TASK } from './types';

const initialState = {
    tasks: [
        {
            id: 0,
            title: `Task for category 3.1.1`,
            description: 'Description for category 3.1.1',
            completed: true,
            idCategoriesList: [null, 3, 31, 311],
          },
          {
            id: 1,
            title: `Task for category 1.1`,
            completed: false,
            idCategoriesList: [null, 1, 11],
          },
          {
            id: 2,
            title: `Task for category 2`,
            description: 'Description for category 2',
            completed: true,
            idCategoriesList: [null, 2],
          }
    ]
}

export const tasksReducer = (state = initialState, action) => {

    switch(action.type) {

      case CREATE_TASK:{
        return {...state, tasks: state.tasks.concat([action.payload])}
      }

      case TOGGLE_TASK_COMPLETION: {
        return {tasks: state.tasks.map(task => {
            if (task.id === action.payload) {
              return {...task, completed: !task.completed};
            } else {
              return task;
            }
            }) 
          }
      }

      case REMOVE_TASK: {
        return {tasks: state.tasks.filter(item => item.id !== action.payload)};
      }

      case CHANGE_TASK: {
        return {tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
          }) 
        }
      }
      default: return state;
    }
}