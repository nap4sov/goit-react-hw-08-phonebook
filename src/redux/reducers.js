import { createReducer, createSlice } from '@reduxjs/toolkit';
import { filterContacts, setError } from './actions';
import {
    fetchContacts,
    addContact,
    deleteContact,
    updateContact,
    registerUser,
    logInUser,
    logOutUser,
    fetchCurrentUser,
} from './operations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: '',
        loading: false,
    },
    extraReducers: {
        [filterContacts]: (state, { payload }) => {
            state.filter = payload;
        },
        [fetchContacts.fulfilled]: (state, { payload }) => {
            state.items = payload;
            state.loading = false;
        },
        [fetchContacts.pending]: state => {
            state.loading = true;
        },
        [fetchContacts.rejected]: state => {
            state.loading = false;
        },
        [addContact.fulfilled]: (state, { payload }) => {
            state.items = [payload, ...state.items];
            state.loading = false;
        },
        [addContact.pending]: state => {
            state.loading = true;
        },
        [addContact.rejected]: state => {
            state.loading = false;
        },
        [deleteContact.fulfilled]: (state, { payload }) => {
            state.items = state.items.filter(({ id }) => id !== payload);
            state.loading = false;
        },
        [deleteContact.pending]: state => {
            state.loading = true;
        },
        [deleteContact.rejected]: state => {
            state.loading = false;
        },
        [updateContact.fulfilled]: (state, { payload }) => {
            state.items = state.items.map(contact =>
                contact.id === payload.id ? payload : contact,
            );
            state.loading = false;
        },
        [updateContact.pending]: state => {
            state.loading = true;
        },
        [updateContact.rejected]: state => {
            state.loading = false;
        },
        [registerUser.pending]: state => {
            state.loading = true;
        },
        [registerUser.fulfilled]: state => {
            state.loading = false;
        },
        [registerUser.rejected]: state => {
            state.loading = false;
        },
        [logInUser.pending]: state => {
            state.loading = true;
        },
        [logInUser.fulfilled]: state => {
            state.loading = false;
        },
        [logInUser.rejected]: state => {
            state.loading = false;
        },
        [logOutUser.pending]: state => {
            state.loading = true;
        },
        [logOutUser.fulfilled]: state => {
            state.loading = false;
        },
        [logOutUser.rejected]: state => {
            state.loading = false;
        },
    },
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: null,
        email: null,
        token: null,
        isLoggedIn: false,
        isFetching: false,
    },
    extraReducers: {
        [fetchCurrentUser.fulfilled]: (state, { payload }) => {
            state.name = payload.name;
            state.email = payload.email;
            state.isLoggedIn = true;
            state.isFetching = false;
        },
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
        [fetchCurrentUser.pending]: state => {
            state.isFetching = true;
        },
        [fetchCurrentUser.rejected]: state => {
            state.isFetching = false;
        },
    },
});

const errorReducer = createReducer(null, {
    [fetchContacts.rejected]: (_, { error }) => error.message,
    [fetchContacts.pending]: () => null,
    [addContact.rejected]: (_, { error }) => error.message,
    [addContact.pending]: () => null,
    [deleteContact.rejected]: (_, { error }) => error.message,
    [deleteContact.pending]: () => null,
    [fetchCurrentUser.rejected]: (_, { error }) => error.message,
    [fetchCurrentUser.pending]: () => null,
    [registerUser.rejected]: (_, { error }) => error.message,
    [registerUser.pending]: () => null,
    [logInUser.rejected]: (_, { error }) => error.message,
    [logInUser.pending]: () => null,
    [logOutUser.rejected]: (_, { error }) => error.message,
    [logOutUser.pending]: () => null,
    [setError]: (_, { payload }) => payload,
});

const contactsReducer = contactsSlice.reducer;
const userReducer = userSlice.reducer;

export { errorReducer, userReducer, contactsReducer };
