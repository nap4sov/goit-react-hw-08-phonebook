import {
    configureStore,
    getDefaultMiddleware,
    combineReducers,
} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    REGISTER,
    REHYDRATE,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
    itemsReducer,
    filterReducer,
    loadingReducer,
    errorReducer,
    userReducer,
} from './reducers';

const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: 'token',
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const rootReducer = {
    contacts: combineReducers({
        items: itemsReducer,
        filter: filterReducer,
        loading: loadingReducer,
    }),
    user: persistedUserReducer,
    error: errorReducer,
};

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
        },
    }),
});

export const persistor = persistStore(store);
