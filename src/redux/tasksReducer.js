import { CREATE_TASK } from "./types";

const initialState = {
    tasks: [
        {
            id: 0,
            title: `Learn the basics of React`,
            completed: true,
          },
          {
            id: 1,
            title: `Learn React hooks`,
            completed: false,
          },
          {
            id: 2,
            title: `Create a complex React application`,
            completed: false,
          }
    ]
}

export const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
      case CREATE_TASK:{
        return {...state, tasks: state.tasks.concat([action.payload])}
      }
      default: return state;
    }
}