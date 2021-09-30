import axios from 'axios';

import { IAuthResponse, ILoginUser, IRegisterUser } from '../types';

export const auth = Object.freeze({
    async login(credentials: ILoginUser) {
        const { email, password } = credentials;
        const { data } = await axios.get<IAuthResponse>(
            `${process.env.REACT_APP_API_URL}/auth/login`,
            {
                headers: {
                    authorization: `Basic ${btoa(`${email}:${password}`)}`,
                },
            },
        );

        return data;
    },

    async register(credentials: IRegisterUser) {
        const { confirmPassword, ...body } = credentials;
        const { data } = await axios.post<IAuthResponse>(
            `${process.env.REACT_APP_API_URL}/auth/registration`,
            body,
        );

        return data;
    },
});
