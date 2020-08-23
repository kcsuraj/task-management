import { IState } from './initialState'
import * as types from './types'
import { Reducer } from 'react'

const reducer: Reducer<IState, any> = (state, action): IState => {
  const { type, payload } = action

  switch (type) {
    case types.API_REQUEST:
      return { ...state, loading: true }
    case types.API_SUCCESS:
      return { ...state, loading: false, data: payload }
    case types.API_ERROR:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}

export default reducer
