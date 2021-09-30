import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from '../api';
import { IRegisterUser } from '../types';
import { Links } from '../utils/constants';
import { useAuth } from './useAuth';

export const useRegister = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const mutation = useMutation(
        (credentials: IRegisterUser) => api.register(credentials),
        {
            onSuccess({ data }) {
                toast.success('Добро пожаловать!');

                setToken(data);
                navigate(Links.tasks);
            },
            onError() {
                toast.error('Ошибка запроса. Повторите через несколько минут или обратитесь к администратору.');
            },
        },
    );

    return mutation;
};
