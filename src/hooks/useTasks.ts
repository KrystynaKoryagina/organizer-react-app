import { useDispatch, useSelector } from 'react-redux';

import { fetchTasksAsync, tasksActions } from '../lib/redux/actions';
import {
    getIsTaskFormOpen, getIsTasksLoading, getSelectedTask, getTaskList,
} from '../lib/redux/selectors';
import { ITask } from '../types';

export const useTasks = () => {
    const dispatch = useDispatch();

    const taskList = useSelector(getTaskList);
    const selectedTask = useSelector(getSelectedTask);
    const isTaskFormOpen = useSelector(getIsTaskFormOpen);
    const isLoading = useSelector(getIsTasksLoading);

    const fetchTasks = () => dispatch(fetchTasksAsync());
    const updateTaskList = (tasks: ITask[]) => dispatch(tasksActions.updateTaskList(tasks));
    const setSelectedTask = (task: ITask | null) => dispatch(tasksActions.setSelectedTask(task));
    const setTaskFormOpen = (isOpen: boolean) => dispatch(tasksActions.setIsTaskFormOpen(isOpen));

    return {
        isLoading,
        taskList,
        selectedTask,
        isTaskFormOpen,
        fetchTasks,
        updateTaskList,
        setSelectedTask,
        setTaskFormOpen,
    };
};
