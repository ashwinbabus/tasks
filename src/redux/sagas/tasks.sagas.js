import { call , all, takeLatest, put } from "redux-saga/effects";
import {getTasks, updateTask , addTask, deleteTask} from "../../api";
import Actions from "../action.types";
import {addTaskFailure, deleteTaskFailure, fetchTasksFailure, fetchTasksStart, fetchTasksSuccess , updateTaskFailure} from "../actions"


// Get all tasks

export function* fetchTasksAsync({payload}){
    try {
        const tasks = yield call(getTasks,payload);
        yield put(fetchTasksSuccess(tasks))
    } catch (error) {
        yield put(fetchTasksFailure(error));
    }
}

export function* fetchTasksStartSaga(){
    yield takeLatest(Actions.FETCH_TASKS_START, fetchTasksAsync)
}



// Update Tasks

export function* updateTaskAsync({payload}){
    const {token} = payload;
    try {
        yield call(updateTask,payload);
        yield put(fetchTasksStart(token))
    } catch (error) {
        yield put( updateTaskFailure(error));
    }
}

export function* updateTaskStartSaga(){
    yield takeLatest(Actions.UPDATE_TASKS_START, updateTaskAsync)
}



// Add new task

export function* addTaskAsync({payload}){
    const {token} = payload;
    try {
        yield call(addTask,payload);
        yield put(fetchTasksStart(token))
    } catch (error) {
        yield put( addTaskFailure(error));
    }
}


export function* addTaskStartSaga(){
    yield takeLatest(Actions.ADD_TASKS_START, addTaskAsync)
}



// Delete Sagas

export function* deleteTaskAsync({payload}){
    const {token} = payload;
    try {
        yield call(deleteTask,payload);
        yield put(fetchTasksStart(token))
    } catch (error) {
        yield put(deleteTaskFailure(error))
    }
}

export function*  deleteTaskStartSaga(){
    yield takeLatest(Actions.DELETE_TASKS,deleteTaskAsync)
}


// Combine task sagas

export default function* taskSagas(){
    yield all([ 
        call(fetchTasksStartSaga), 
        call(updateTaskStartSaga),
        call(addTaskStartSaga),
        call(deleteTaskStartSaga)
    ])
}