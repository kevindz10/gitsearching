import {takeLatest} from 'redux-saga/effects'
import {actionTypes as searchActions} from '../features/searching';

import trySearchingList from './searching/list'

export default function* rootSaga() {
    yield takeLatest(searchActions.LIST_TRY, trySearchingList);
}