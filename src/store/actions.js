import * as actionsTypes from './actionTypes'


export function taskCompleted(id) {
    return {
        type: actionsTypes.taskUpdated,
        payload: {id: id, completed: true}
    }
}

export function titleChanged(id) {
    return {
        type: actionsTypes.taskUpdated,
        payload: {id: id, title: `New title for ${id}`}
    }
}