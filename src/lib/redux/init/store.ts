import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './rootReducer';
import {
    composeEnhancers,
    middleware,
} from './middleware';

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);

export type RootState = ReturnType<typeof store.getState>;
