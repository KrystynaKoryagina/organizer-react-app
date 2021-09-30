import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { api } from '../api';
import { ITask, ITaskRequest } from '../types';
import { useTasks } from './useTasks';

export const useUpdateTask = () => {
    const {
        taskList, updateTaskList, selectedTask, setSelectedTask, setTaskFormOpen,
    } = useTasks();

    const mutation = useMutation((task: ITaskRequest) => api.updateTask(selectedTask.id, task),
        {
            onSuccess(newTask) {
                const index = taskList?.findIndex((task: ITask) => task.id === selectedTask.id);
                taskList?.splice(index, 1, newTask);

                updateTaskList(taskList);
                setSelectedTask(null);
                setTaskFormOpen(false);
                toast.info('Задача обновлена!');
            },
        });

    return mutation;
};
