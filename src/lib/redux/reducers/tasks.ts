import { AnyAction } from 'redux';

import { tasksTypes } from '../types';
import { ITask } from '../../../types';

export interface ITasksState {
    taskList: ITask[] | null;
    selectedTask: ITask | null;
    isTaskFormOpen: boolean;
    isLoading: boolean;
}

const initialState: ITasksState = {
    taskList:       null,
    selectedTask:   null,
    isTaskFormOpen: false,
    isLoading:      false,
};

export const taskReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case tasksTypes.SET_TASK_LIST: {
            return {
                ...state,
                taskList: action.payload,
            };
        }
        case tasksTypes.UPDATE_TASK_LIST: {
            return {
                ...state,
                taskList: action.payload,
            };
        }
        case tasksTypes.SET_SELECTED_TASK: {
            return {
                ...state,
                selectedTask: action.payload,
            };
        }
        case tasksTypes.SET_TASK_FORM_OPEN: {
            return {
                ...state,
                isTaskFormOpen: action.payload,
            };
        }
        case tasksTypes.SET_IS_TASKS_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
