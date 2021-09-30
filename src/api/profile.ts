import axios from 'axios';

import { IUser } from '../types';

export const profile = Object.freeze({
    async getProfile() {
        const { data } = await axios.get<IUser>(
            `${process.env.REACT_APP_API_URL}/auth/profile`,
        );

        return data;
    },
});
