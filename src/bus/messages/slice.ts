// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { MessagesState } from './types';

// Cases
import * as cases from './cases';

const initialState: MessagesState = [];

export const messagesSlice = createSlice({
    name:     'messages',
    initialState,
    reducers: {
        ...cases,
    },
});

export const messagesActions = messagesSlice.actions;
export default messagesSlice.reducer;
