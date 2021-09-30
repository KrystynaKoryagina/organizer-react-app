import { FC } from 'react';

import { LoginForm } from '../components';

import { FormWrapper } from '../components/auth/Form.styled';

export const LoginPage: FC = () => {
    return (
        <FormWrapper>
            <LoginForm />
        </FormWrapper>
    );
};
