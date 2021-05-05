import Actions from './action.types';

// FETCH TOKEN ACTIONS

export const fetchTokenStart = () => ({
    type : Actions.FETCH_TOKEN_START,
})

export const fetchTokenSuccess = (token) => ({
    type : Actions.FETCH_TOKEN_SUCCESS,
    payload : token
})

export const fetchTokenFailure = (error) => ({
    type : Actions.FETCH_TOKEN_FAILURE,
    payload : error
})




// FETCH TASKS ACTIONS

export const fetchTasksStart = (token) => ({
    type : Actions.FETCH_TASKS_START,
    payload : token
})

export const fetchTasksSuccess = (tasks) => ({
    type : Actions.FETCH_TASKS_SUCCESS,
    payload : tasks
})

export const fetchTasksFailure = (error) => ({
    type : Actions.FETCH_TASKS_FAILURE,
    payload : error
})



//  UPDATE TASKS ACTIONS

export const updateTaskStart = (obj) => ({
    type : Actions.UPDATE_TASKS_START,
    payload : obj
})

export const updateTaskSuccess = () => ({
    type : Actions.UPDATE_TASKS_SUCCESS,
})

export const updateTaskFailure = (error) => ({
    type : Actions.UPDATE_TASKS_FAILURE,
    payload : error
})



// ADD TASKS 

export const addTaskStart = (obj) => ({
    type : Actions.ADD_TASKS_START,
    payload : obj
})

export const addTaskSuccess = () => ({
    type : Actions.ADD_TASKS_SUCCESS,
})

export const addTaskFailure = (error) => ({
    type : Actions.ADD_TASKS_FAILURE,
    payload : error
})




// FETCH USER ACTIONS

export const fetchUserStart = (token) => ({
    type : Actions.FETCH_USER_START,
    payload : token
})

export const fetchUserSuccess = (user) => ({
    type : Actions.FETCH_USER_SUCCESS,
    payload : user
})

export const fetchUserFailure = (error) => ({
    type : Actions.FETCH_USER_FAILURE,
    payload : error
})



// DELETE TASK 

export const deleteTask = (obj) => ({
    type : Actions.DELETE_TASKS,
    payload : obj
})


export const deleteTaskFailure = (error) => ({
    type : Actions.DELETE_TASKS_FAILURE,
    payload : error
})