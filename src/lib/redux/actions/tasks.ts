import { toast } from 'react-toastify';
import { Dispatch } from 'redux';

import { api } from '../../../api';
import { ITask } from '../../../types/Task';
import { tasksTypes } from '../types';

export const tasksActions = Object.freeze({
    setTaskList: (tasks: ITask[]) => {
        return {
            type:    tasksTypes.SET_TASK_LIST,
            payload: tasks,
        };
    },
    updateTaskList: (tasks: ITask[]) => {
        return {
            type:    tasksTypes.UPDATE_TASK_LIST,
            payload: tasks,
        };
    },
    setSelectedTask: (task: ITask | null) => {
        return {
            type:    tasksTypes.SET_SELECTED_TASK,
            payload: task,
        };
    },
    setIsTaskFormOpen: (isOpen: boolean) => {
        return {
            type:    tasksTypes.SET_TASK_FORM_OPEN,
            payload: isOpen,
        };
    },
    setIsLoading: (value: boolean) => {
        return {
            type:    tasksTypes.SET_IS_TASKS_LOADING,
            payload: value,
        };
    },
});

export const fetchTasksAsync = () => async (dispatch: Dispatch) => {
    try {
        dispatch(tasksActions.setIsLoading(true));

        const tasks = await api.getTasks();

        dispatch(tasksActions.setTaskList(tasks));
    } catch (error) {
        toast(error.message);
    } finally {
        dispatch(tasksActions.setIsLoading(false));
    }
};
