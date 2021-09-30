import { toast } from 'react-toastify';
import { Dispatch } from 'redux';

import { api } from '../../../api';
import { IUser } from '../../../types';
import { profileTypes } from '../types';

export const ProfileActions = Object.freeze({
    setProfile: (user: IUser | null) => {
        return {
            type:    profileTypes.SET_PROFILE,
            payload: user,
        };
    },
    setIsLoading: (value: boolean) => {
        return {
            type:    profileTypes.SET_IS_LOADING,
            payload: value,
        };
    },
});

export const fetchUserProfileAsync = () => async (dispatch: Dispatch) => {
    try {
        dispatch(ProfileActions.setIsLoading(true));

        const user = await api.getProfile();

        dispatch(ProfileActions.setProfile(user));
    } catch {
        toast.error('Пользователь не найден');
    } finally {
        dispatch(ProfileActions.setIsLoading(false));
    }
};
