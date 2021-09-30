import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../hooks';
import { NavWrapper, LogoutButton } from './Nav.styled';

export const Nav: FC = () => {
    const { token, removeToken } = useAuth();

    const logout = () => removeToken();

    return (
        <NavWrapper>
            { !token && <NavLink to = '/login'>Войти</NavLink> }
            <NavLink aria-disabled = { !token } to = '/task-manager'>К задачам</NavLink>
            <NavLink aria-disabled = { !token } to = '/profile'>Профиль</NavLink>

            { token && <LogoutButton onClick = { logout }>Выйти</LogoutButton> }
        </NavWrapper>
    );
};
