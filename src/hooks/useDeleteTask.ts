import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { api } from '../api';
import { ITask } from '../types';
import { useTasks } from './useTasks';

export const useDeleteTask = () => {
    const {
        taskList, updateTaskList, selectedTask, setSelectedTask, setTaskFormOpen,
    } = useTasks();

    const mutation = useMutation(
        (id: string) => api.deleteTask(id),
        {
            onSuccess() {
                const tasks = taskList?.filter((task: ITask) => task.id !== selectedTask.id);

                updateTaskList(tasks);
                setSelectedTask(null);
                setTaskFormOpen(false);
                toast.info('Задача удалена!');
            },
        },
    );

    return mutation;
};
