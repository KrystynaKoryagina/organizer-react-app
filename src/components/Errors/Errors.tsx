import { FC } from 'react';
import { FieldErrors } from 'react-hook-form';

import { ErrorsWrapper } from './Errors.styled';
import { Error } from '../../theme/styles/styled-component/Error.styled';

export interface IErrorsPropTypes {
    errors: FieldErrors;
}

export const Errors: FC<IErrorsPropTypes> = ({ errors }) => {
    const errorJSX = Object.keys(errors)?.map((key, i) => {
        return <Error as = 'p' key = { i }>{ errors[ key ].message }</Error>;
    });

    return (
        <ErrorsWrapper>
            { errorJSX }
        </ErrorsWrapper>
    );
};
