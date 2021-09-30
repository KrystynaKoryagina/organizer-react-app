import { useDispatch, useSelector } from 'react-redux';

import { fetchUserProfileAsync, ProfileActions } from '../lib/redux/actions';
import { getIsLoading, getUserProfile } from '../lib/redux/selectors';
import { IUser } from '../types';

export const useProfile = () => {
    const dispatch = useDispatch();

    const user = useSelector(getUserProfile);
    const isLoading = useSelector(getIsLoading);

    const fetchUserProfile = () => dispatch(fetchUserProfileAsync());
    const setUserProfile = (value: IUser | null) => dispatch(ProfileActions.setProfile(value));

    return {
        user,
        isLoading,
        fetchUserProfile,
        setUserProfile,
    };
};
