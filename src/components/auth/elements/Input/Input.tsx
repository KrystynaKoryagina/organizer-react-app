import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { Label, Error } from '../../../../theme/styles/styled-component';
import { InputWrapper } from '../../Form.styled';

interface IInputPropTypes {
    type: string;
    placeholder: string;
    register: UseFormRegisterReturn;
    error?: {
        message?: string;
    };
}

export const Input: FC<IInputPropTypes> = ({
    type, placeholder, register, error,
}) => {
    return (
        <Label>
            { error?.message && <Error>{ error?.message }</Error> }

            <InputWrapper
                type = { type }
                placeholder = { placeholder }
                { ...register } />

        </Label>
    );
};
