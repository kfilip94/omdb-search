import { useReducer, useCallback } from 'react';
import { ASYNC_STATES } from '../constants.js';

const { IDLE, PENDING, REJECTED, RESOLVED } = ASYNC_STATES;

const asyncReducer = (state, action) => {
  switch (action.type) {
    case PENDING: {
      return {status: PENDING, data: null, error: null}
    }
    case RESOLVED: {
      return {status: RESOLVED, data: action.data, error: null}
    }
    case REJECTED: {
      return {status: REJECTED, data: null, error: action.error}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const useAsync = initialState => {
  const [state, dispatch] = useReducer(asyncReducer, {
    status: IDLE,
    data: null,
    error: null,
    ...initialState,
  })

  const run = useCallback(promise => {
    dispatch({type: PENDING})
    promise.then(
      data => {
        dispatch({type: RESOLVED, data})
      },
      error => {
        dispatch({type: REJECTED, error})
      },
    )
  }, [])
  return {...state, run}
}

export default useAsync;