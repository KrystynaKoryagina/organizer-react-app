import { FC } from 'react';

import { TaskForm, Tasks } from '../../components';

import { useTasks } from '../../hooks';
import {
    Controls, CreateTaskButton, TaskFormWrapper, Wrap,
} from './TaskManager.styled';

export const TaskManager: FC = () => {
    const {
        taskList, isTaskFormOpen, setTaskFormOpen, setSelectedTask, isLoading,
    } = useTasks();

    const openTaskForm = () => {
        setSelectedTask(null);
        setTaskFormOpen(true);
    };

    return (
        <>
            <Controls>
                <i className = 'las'></i>
                <CreateTaskButton onClick = { openTaskForm }>Новая задача</CreateTaskButton>
            </Controls>

            <Wrap>
                <div className = { `list ${!taskList?.length && !isLoading ? 'empty' : ''}` }>
                    <Tasks />
                </div>

                { isTaskFormOpen && <TaskFormWrapper>
                    <TaskForm />
                </TaskFormWrapper> }
            </Wrap>
        </>
    );
};
