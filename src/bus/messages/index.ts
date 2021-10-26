// Core
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Actions
// import {} from './saga/actions'

export const useMessages = () => {
    const messages = useSelector((state) => state.messages);

    // useEffect(() => {

    // }, []);

    return {
        messages,
    };
};

export const useMessagesActions = () => {
    const dispatch = useDispatch();

    return {
        messagesAction: dispatch({}),
    };
};
