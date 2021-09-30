// Core
import { FC, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Components
import { Footer, Nav, Preloader } from './components';
import { useAuth, useProfile } from './hooks';
import { Main } from './theme/styles/styled-component';
import { routes } from './utils/routes';


export const App: FC = () => {
    const { token } = useAuth();
    const { user, fetchUserProfile, isLoading } = useProfile();

    useEffect(() => {
        if (token) {
            fetchUserProfile();
        }
    }, [token]);

    const routing = useRoutes(routes(user));

    return (
        <>
            <ToastContainer
                position = 'top-right'
                autoClose = { 3000 }
                hideProgressBar = { false }
                newestOnTop
                closeOnClick />

            <Nav />

            {
                isLoading ? <Preloader /> : <Main>{ routing }</Main>
            }

            <Footer />
        </>
    );
};
