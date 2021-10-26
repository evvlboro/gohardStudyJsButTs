// Actions
import { messagesActions } from '../../slice';

// Tools
import * as API from '../api';
import { makeRequest } from '../../../../tools/utils';

// Types
import { MessagesState } from '../../types';
import { FetchMessagesContract } from '../types';

export function* fetchMessages(action: ReturnType<FetchMessagesContract>) {
    console.log('🚀action', action);

    const result: MessagesState | null = yield makeRequest<MessagesState>({
        fetcher:           API.fetchMessages,
        succesAction:      messagesActions.setMessages,
        successSideEffect: function* (result) {
            yield console.log('successSideEffect', result);
        },
    });

    if (result !== null) {
        console.log('outsideSuccessSideEffect');
    }
}
