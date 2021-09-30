import { FC, MouseEvent } from 'react';

import { ITask } from '../../types';
import { Head, CompleteTaskButton, RemoveTaskButton } from './TaskForm.styled';

export interface ITaskControlTypeProps {
    selectedTask?: ITask;
    handleTaskDelete?: (event: MouseEvent<HTMLDivElement>) => void;
    handleTaskComplete?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const TaskControl: FC<ITaskControlTypeProps> = (
    { selectedTask, handleTaskDelete, handleTaskComplete },
) => {
    return (
        <Head>
            <CompleteTaskButton
                disabled = { !selectedTask }
                onClick = { handleTaskComplete }>Завершить</CompleteTaskButton>

            { selectedTask && <RemoveTaskButton onClick = { handleTaskDelete }></RemoveTaskButton> }
        </Head>
    );
};
