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
        const response = await axios.post('/users/signup', userData);
        const token = response.data.token;
        authToken.set(token);
        return response.data;
    },
);

export const logInUser = createAsyncThunk('user/logIn', async userData => {
    const response = await axios.post('/users/login', userData);
    const token = response.data.token;
    authToken.set(token);
    return response.data;
});

export const logOutUser = createAsyncThunk('user/logOut', async () => {
    await axios.post('/users/logout');
    authToken.unset();
});

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const contacts = await axios.get('/contacts').then(({ data }) => data);
        return contacts;
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
        const idToDelete = await axios
            .delete(`/contacts/${id}`)
            .then(({ data }) => data.id);
        return idToDelete;
    },
);
