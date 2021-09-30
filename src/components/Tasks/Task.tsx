import { FC } from 'react';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

import { Tag } from '../Tags';

import { ITask } from '../../types/Task';
import {
    TaskTitle, TaskItem, Meta, Deadline,
} from './Tasks.styled';

interface ITaskPropsType {
    task: ITask,
    handleClick: (task: ITask) => void;
}

export const Task: FC<ITaskPropsType> = ({ task, handleClick }) => {
    const { title, deadline, tag } = task;
    const completed = task?.completed ? 'completed' : '';

    return (
        <TaskItem className = { `${completed}` } onClick = { () => handleClick(task) }>
            <TaskTitle>{ title }</TaskTitle>
            <Meta>
                <Deadline>{ format(new Date(deadline), 'dd MMM yyyy', { locale: ru }) }</Deadline>

                <Tag { ...tag } />
            </Meta>
        </TaskItem>
    );
};
