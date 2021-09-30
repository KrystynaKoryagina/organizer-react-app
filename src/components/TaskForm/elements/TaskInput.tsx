import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { Input } from '../../../theme/styles/styled-component';
import { ContentItem, TaskLabel } from '../TaskForm.styled';

interface ITaskInputPropTypes {
    placeholder: string;
    type: string;
    label: string;
    register: UseFormRegisterReturn;
}


export const TaskInput: FC<ITaskInputPropTypes> = ({
    type, placeholder, register, label,
}) => {
    return (
        <ContentItem>
            <TaskLabel>
                { label }
                <Input
                    placeholder = { placeholder }
                    type = { type }
                    { ...register } />
            </TaskLabel>
        </ContentItem>
    );
};
