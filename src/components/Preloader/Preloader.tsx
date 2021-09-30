import { FC } from 'react';
import Loader from 'react-loader-spinner';

import { PreloaderWrapper } from './Preloader.styled';

export const Preloader: FC = () => {
    return (
        <PreloaderWrapper>
            <Loader
                type = 'Bars'
                color = '#4D7CFE'
                height = { 100 }
                width = { 100 } />
        </PreloaderWrapper>
    );
};
