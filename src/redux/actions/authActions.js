import * as actions from './../actionTypes/action-types'

export const setAuthedUser = (id) => {
  return {
    type: actions.SET_AUTHED_USER,
    id
  }
}

export const notAuthedUser = () => {
  return {
    type: actions.NOT_AUTHED_USER,
  }
}
