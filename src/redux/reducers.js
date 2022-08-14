import { createReducer, createSlice } from '@reduxjs/toolkit';
import { filterContacts } from './actions';
import {
    fetchContacts,
    addContact,
    deleteContact,
    registerUser,
    logInUser,
    logOutUser,
} from './operations';

const itemsReducer = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContact.fulfilled]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
    [registerUser.pending]: () => true,
    [registerUser.fulfilled]: () => false,
    [registerUser.rejected]: () => false,
    [logInUser.pending]: () => true,
    [logInUser.fulfilled]: () => false,
    [logInUser.rejected]: () => false,
    [logOutUser.pending]: () => true,
    [logOutUser.fulfilled]: () => false,
    [logOutUser.rejected]: () => false,
});

const errorReducer = createReducer(null, {
    [fetchContacts.rejected]: (_, { error }) => error.message,
    [fetchContacts.pending]: () => null,
    [addContact.rejected]: (_, { error }) => error.message,
    [addContact.pending]: () => null,
    [deleteContact.rejected]: (_, { error }) => error.message,
    [deleteContact.pending]: () => null,
    [registerUser.rejected]: (_, { error }) => error.message,
    [registerUser.pending]: () => null,
    [logInUser.rejected]: (_, { error }) => error.message,
    [logInUser.pending]: () => null,
    [logOutUser.rejected]: (_, { error }) => error.message,
    [logOutUser.pending]: () => null,
});

const user = createSlice({
    name: 'user',
    initialState: {
        name: null,
        email: null,
        token: null,
        isLoggedIn: false,
    },
    extraReducers: {
        [registerUser.fulfilled]: (state, { payload }) => {
            state.name = payload.user.name;
            state.email = payload.user.email;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logInUser.fulfilled]: (state, { payload }) => {
            state.name = payload.user.name;
            state.email = payload.user.email;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logOutUser.fulfilled]: state => {
            state.name = null;
            state.email = null;
            state.token = null;
            state.isLoggedIn = false;
        },
    },
});
const userReducer = user.reducer;

export {
    itemsReducer,
    filterReducer,
    loadingReducer,
    errorReducer,
    userReducer,
};
