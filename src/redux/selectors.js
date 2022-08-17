import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.loading;

export const getFilterValue = state => state.contacts.filter.toLowerCase();

export const getFilteredContacts = createSelector(
    state => getContacts(state),
    state => getFilterValue(state),
    (contacts, filter) =>
        contacts.filter(({ name }) => name.toLowerCase().includes(filter)),
);

export const contactsIsEmpty = state => getContacts(state).length === 0;

export const getErrorMessage = state => state.error;

export const getUserEmail = state => state.user.email;

export const getIsLoggedIn = state => state.user.isLoggedIn;

export const getIsFetchingCurrentUser = state => state.user.isFetching;

export const getUserToken = state => state.user.token;
