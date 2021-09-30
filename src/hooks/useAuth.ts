import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Links } from '../utils/constants';
import { useProfile } from './useProfile';

export const useAuth = () => {
    const navigate = useNavigate();
    const { setUserProfile } = useProfile();

    const token = localStorage.getItem('token');

    const setToken = (jwt: string) => {
        localStorage.setItem('token', jwt);
    };

    const removeToken = () => {
        setUserProfile(null);
        navigate(Links.login);
        localStorage.removeItem('token');
        toast.info('Возвращайся поскорее ;) Мы будем скучать');
    };

    return {
        token,
        setToken,
        removeToken,
    };
};
