import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const increment = createAction(INCREMENT_COUNTER)

export const decrement = createAction(DECREMENT_COUNTER)

export const incrementIfOdd = createAction('IF_ODD')

// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState()

//     if (counter % 2 === 0) {
//       return
//     }

//     dispatch(increment())
//   }
// }
