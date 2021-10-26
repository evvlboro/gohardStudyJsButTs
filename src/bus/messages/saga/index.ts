// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// Workers
import * as workers from './workers';

function* watchFetchMessages(): SagaIterator {
    yield takeEvery(types.FETCH_MESSAGES_ASYNC, workers.fetchMessages);
}

export function* watchMessages(): SagaIterator {
    yield all([ call(watchFetchMessages) ]);
}
