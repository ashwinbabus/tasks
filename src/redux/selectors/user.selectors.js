import {createSelector} from "reselect"

const selectUser = state => state.user;

export const selectUserId = createSelector(
    [selectUser],
    user => user.id
)

export const selectUserImage = createSelector(
    [selectUser],
    user => user.icon
)

export const selectUserName = createSelector(
    [selectUser],
    user => user.first
)