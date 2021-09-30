import axios, { AxiosRequestConfig } from 'axios';

import { taskApi } from './task';
import { auth } from './auth';
import { profile } from './profile';

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = localStorage.getItem('token');

        if (!config.headers.authorization) {
            // eslint-disable-next-line no-param-reassign
            config.headers = {
                authorization: `Bearer ${token}`,
            };
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export const api = Object.freeze({
    ...taskApi,
    ...auth,
    ...profile,
});
