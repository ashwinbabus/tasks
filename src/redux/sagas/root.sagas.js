import {all,call} from "redux-saga/effects"

import taskSagas from './tasks.sagas';
import userSagas from './user.sagas';
import tokenSagas from './token.sagas';

export default function* rootSaga(){
    yield all([
        call(taskSagas),
        call(userSagas),
        call(tokenSagas)
    ])
}
