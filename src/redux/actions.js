import { createAction } from '@reduxjs/toolkit';

export const filterContacts = createAction('contacts/filter');

export const setError = createAction('contacts/setError');
