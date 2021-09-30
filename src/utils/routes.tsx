import { Navigate } from 'react-router-dom';

import {
    LoginPage, ProfilePage, RegisterPage, TaskManager,
} from '../pages';

import { Links } from './constants';

export const routes = (isLoggedIn: boolean) => [
    {
        path:    '/',
        element: <Navigate to = { isLoggedIn ? Links.tasks : Links.login } />,
    },
    {
        path:    Links.tasks,
        element: isLoggedIn ? <TaskManager /> : <Navigate to = { Links.login } />,
    },
    {
        path:    Links.login,
        element: isLoggedIn ? <Navigate to = { Links.tasks } /> : <LoginPage />,
    },
    {
        path:    Links.register,
        element: isLoggedIn ? <Navigate to = { Links.tasks } /> : <RegisterPage />,
    },
    {
        path:    Links.profile,
        element: isLoggedIn ?  <ProfilePage /> : <Navigate to = { Links.login } />,
    },
];
