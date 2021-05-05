import { call , all, takeLatest, put } from "redux-saga/effects";
import {getUser} from "../../api";
import Actions from "../action.types";
import {fetchUserSuccess, fetchUserFailure} from "../actions"


export function* fetchUserAsync({payload}){
    try {
        const user  = yield call(getUser , payload);
        yield put(fetchUserSuccess(user))
    } catch (error) {
        yield put(fetchUserFailure(error));
    }
}

export function* fetchUserStartSaga(){
    yield takeLatest(Actions.FETCH_TOKEN_SUCCESS, fetchUserAsync)
}

export default function* userSagas(){
    yield all([call(fetchUserStartSaga)]);
}