import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { api } from '../api';
import { ITaskRequest } from '../types';
import { useTasks } from './useTasks';

export const useCreateTask = () => {
    const { taskList, updateTaskList, setTaskFormOpen } = useTasks();

    const mutation = useMutation(
        (task: ITaskRequest) => api.createTask(task),
        {
            onSuccess(newTask) {
                const tasks = [newTask, ...taskList];

                updateTaskList(tasks);
                setTaskFormOpen(false);
                toast.info('Задача добавлена');
            },
        },
    );

    return mutation;
};
