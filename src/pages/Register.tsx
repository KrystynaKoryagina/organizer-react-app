import { FC } from 'react';

import { RegisterForm } from '../components';

import { FormWrapper } from '../components/auth/Form.styled';

export const RegisterPage: FC = () => {
    return (
        <FormWrapper>
            <RegisterForm />
        </FormWrapper>
    );
};
