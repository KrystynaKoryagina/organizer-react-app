import { RootState } from '../init/store';

export const getUserProfile = (state: RootState) => {
    return state.profile.user;
};

export const getIsLoading = (state: RootState) => {
    return state.profile.isLoading;
};
