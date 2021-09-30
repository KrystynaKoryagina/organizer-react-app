import { FC } from 'react';

import { useProfile } from '../../hooks';

export const User: FC = () => {
    const { user: { name, email } } = useProfile();

    return (
        <div>
            <h1>Профиль пользователя</h1>
            <div>Имя: { name }</div>
            <div>Email: { email }</div>
        </div>
    );
};
