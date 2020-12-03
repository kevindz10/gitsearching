import { call, put } from 'redux-saga/effects'

import { actionTypes as searchActions } from '../../features/searching';

export default function* tryUsersList() {
    try {
        const URL = 'https://jsonplaceholder.typicode.com/users'
        const response = yield call(fetch, URL)
        const data = yield call([response, 'json'])

        yield put({ type: searchActions.LIST_SUCCESS, data })
    } catch (e) {
        yield put({ type: searchActions.LIST_FAILED })
    }
}