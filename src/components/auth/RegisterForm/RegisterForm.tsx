import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../elements';

import {
    Form, Fieldset, Legend, Text, SubmitButton,
} from '../Form.styled';
import { registerSchema } from './registerConfig';
import { useRegister } from '../../../hooks';
import { IRegisterUser } from '../../../types';

export const RegisterForm: FC = () => {
    const signUp = useRegister();
    const {
        register, handleSubmit, reset, formState: { errors },
    } = useForm({
        mode:     'onTouched',
        resolver: yupResolver(registerSchema),
    });

    const submit = handleSubmit(async (credentials: IRegisterUser) => {
        await signUp.mutateAsync(credentials);
        reset();
    });

    return (
        <Form onSubmit = { submit }>
            <Fieldset>
                <Legend>Регистрация</Legend>
                <Input
                    type = 'text'
                    placeholder = 'Имя и Фамилия'
                    register = { register('name') }
                    error = { errors.name } />
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
                <Input
                    type = 'password'
                    placeholder = 'Подтверждение пароля'
                    register = { register('confirmPassword') }
                    error = { errors.confirmPassword } />

                <SubmitButton type = 'submit'>Зарегистрироваться</SubmitButton>
            </Fieldset>

            <Text>Перейти к
                <Link to = '/login'> логину</Link>.
            </Text>
        </Form>
    );
};
