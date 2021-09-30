import { FC, useEffect } from 'react';

import { Task } from './Task';
import { Preloader } from '../Preloader';

import { useTasks } from '../../hooks';
import { ITask } from '../../types';
import { TasksList } from './Tasks.styled';

export const Tasks: FC = () => {
    const {
        fetchTasks, taskList, setSelectedTask, setTaskFormOpen, isLoading,
    } = useTasks();

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleTaskClick = (task: ITask) => {
        setSelectedTask(task);
        setTaskFormOpen(true);
    };

    const taskJSX = taskList?.map((task: ITask) => <Task
        key = { task.id }
        task = { task }
        handleClick = { handleTaskClick } />);

    return (
        <TasksList>
            { isLoading ? <Preloader /> : taskJSX }
        </TasksList>
    );
};
