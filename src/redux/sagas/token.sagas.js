import { call , all, takeLatest, put } from "redux-saga/effects";
import {getToken} from "../../api";
import Actions from "../action.types";
import { fetchTasksStart, fetchTokenFailure, fetchTokenSuccess} from "../actions"


export function* fetchTokenAsync(){
    try {
        const token  = yield call(getToken);
        yield put(fetchTokenSuccess(token));
        yield put(fetchTasksStart(token))
    } catch (error) {
        yield put(fetchTokenFailure(error));
    }
}

export function* fetchTokenStartSaga(){
    yield takeLatest(Actions.FETCH_TOKEN_START, fetchTokenAsync)
}

export default function* tokenSagas(){
    yield all([call(fetchTokenStartSaga)])
}