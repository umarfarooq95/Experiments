/**
 * Created by MathDiskAsus on 1/16/2018.
 */

import {delay} from 'redux-saga'
import {put, takeEvery, all, takeLatest, call} from 'redux-saga/effects'

import {REQUEST_API_CALL, receiveApiData} from './action'
import {fetchData} from './api'


function* fetchingData(action) {
    try {
        const data = yield call(fetchData)
        yield put(receiveApiData(data))
    }
    catch (e) {
        console.error(e)
    }
}

export  default function* requestAPICall() {
    yield takeLatest(REQUEST_API_CALL, fetchingData)
}
