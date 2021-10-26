
// Types
import * as types from '../../types';

// Tools
import { API_URL } from '../../../../init/constants';

const ROUTE = '';

export const fetchMessages: () => Promise<types.MessagesState> = async () => {
    const response = await fetch(`${API_URL}/${ROUTE}`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error();
    }

    return response.json();
};
