import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../elements';

import {
    Form, Fieldset, Legend, Text, SubmitButton,
} from '../Form.styled';
import { loginFormSchema } from './loginConfig';
import { useLogin } from '../../../hooks';
import { ILoginUser } from '../../../types';

export const LoginForm: FC = () => {
    const login = useLogin();
    const {
        register, handleSubmit, reset, formState: { errors },
    } = useForm({
        mode:     'onTouched',
        resolver: yupResolver(loginFormSchema),
    });

    const submit = handleSubmit(async (credentials: ILoginUser) => {
        await login.mutateAsync(credentials);
        reset();
    });

    return (
        <Form onSubmit = { submit }>
            <Fieldset>
                <Legend>Вход</Legend>
                <Input
                    type = 'text'
                    placeholder = 'Электропочта'
                    register = { register('email') }
                    error = { errors.email } />
                <Input
                    type = 'password'
                    placeholder = 'Пароль'
                    register = { register('password') }
                    error = { errors.password } />

                <SubmitButton type = 'submit'>Войти</SubmitButton>
            </Fieldset>

            <Text>Если у вас до сих пор нет учётной записи, вы можете
                <Link to = '/signup'> зарегистрироваться</Link>.
            </Text>
        </Form>
    );
};
