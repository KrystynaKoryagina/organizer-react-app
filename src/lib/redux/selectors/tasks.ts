import { RootState } from '../init/store';

export const getTaskList = (state: RootState) => {
    return state.tasks.taskList;
};

export const getSelectedTask = (state: RootState) => {
    return state.tasks.selectedTask;
};

export const getIsTaskFormOpen = (state: RootState) => {
    return state.tasks.isTaskFormOpen;
};

export const getIsTasksLoading = (state: RootState) => {
    return state.tasks.isLoading;
};
