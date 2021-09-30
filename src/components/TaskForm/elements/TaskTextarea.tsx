import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { Textarea } from '../../../theme/styles/styled-component';
import { ContentItem, TaskLabel } from '../TaskForm.styled';

interface ITaskTextareaPropTypes {
    placeholder?: string;
    label: string;
    register: UseFormRegisterReturn;
}

export const TaskTextarea: FC<ITaskTextareaPropTypes> = ({ placeholder, register, label }) => {
    return (
        <ContentItem>
            <TaskLabel>
                { label }
                <Textarea placeholder = { placeholder } { ...register }></Textarea>
            </TaskLabel>
        </ContentItem>
    );
};
