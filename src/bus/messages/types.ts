// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
export type Entity = {
    _id: string
};

export type MessagesState = Array<Entity>

// Contracts
export type SetMessagesContract = CaseReducer<MessagesState, PayloadAction<MessagesState>>
