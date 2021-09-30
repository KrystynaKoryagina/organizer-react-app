import { AnyAction } from 'redux';

import { IUser } from '../../../types';
import { profileTypes } from '../types';

export interface IProfileState {
    user: IUser | null;
    isLoading: boolean;
}

const initialState: IProfileState = {
    user:      null,
    isLoading: false,
};

export const profileReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case profileTypes.SET_PROFILE: {
            return {
                ...state,
                user: action.payload,
            };
        }
        case profileTypes.SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
