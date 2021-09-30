import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from '../api';
import { ILoginUser } from '../types';
import { Links } from '../utils/constants';
import { useAuth } from './useAuth';

export const useLogin = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const mutation = useMutation(
        (credentials: ILoginUser) => api.login(credentials),
        {
            onSuccess({ data }) {
                toast.success('Добро пожаловать!');
                setToken(data);
                navigate(Links.tasks);
            },
            onError({ response }) {
                if (response?.status === 401) {
                    toast.error('Неверный логин или пароль. Проверьте корректность введённых данных.');
                } else {
                    toast.error('Ошибка запроса. Повторите через несколько минут или обратитесь к администратору.');
                }
            },
        },
    );

    return mutation;
};
