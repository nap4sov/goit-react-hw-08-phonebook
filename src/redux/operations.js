import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const authToken = {
    set: token =>
        (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
    unset: () => (axios.defaults.headers.common.Authorization = ''),
};

export const registerUser = createAsyncThunk(
    'user/register',
    async userData => {
        const { data } = await axios.post('/users/signup', userData);
        const token = data.token;
        authToken.set(token);
        return data;
    },
);

export const logInUser = createAsyncThunk('user/logIn', async userData => {
    const { data } = await axios.post('/users/login', userData);
    const token = data.token;
    authToken.set(token);
    return data;
});

export const logOutUser = createAsyncThunk('user/logOut', async () => {
    await axios.post('/users/logout');
    authToken.unset();
});

export const fetchCurrentUser = createAsyncThunk(
    'user/fetchCurrent',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.user.token;

        if (!persistedToken) {
            return thunkAPI.rejectWithValue(null);
        }

        authToken.set(persistedToken);

        const { data } = await axios.get('/users/current');
        return data;
    },
);

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const { data } = await axios.get('/contacts');
        return data;
    },
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async contact => {
        const newContact = axios
            .post('/contacts', contact)
            .then(({ data }) => data);
        return newContact;
    },
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async id => {
        await axios.delete(`/contacts/${id}`);
        return id;
    },
);
