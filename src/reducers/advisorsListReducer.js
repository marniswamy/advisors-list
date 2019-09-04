import { INITIAL_STATE } from '../constants/INITIAL_STATE';


const reducers = {

};

/**
 * This reducer is handling the reviews component all reducers
 *
 * @param {Object} state - the Redux state of the reducer that this function is
 *  used for
 * @param {*} action - the action dispatched with type and payload props.
 * @returns {*} the next Redux state
 */
export const advisorsListReducer = (
  state = INITIAL_STATE,
  action
) => {
  const { type, payload } = action;
  const reducer = reducers[type];

  return (reducer) ?
    reducer(state, payload) :
    state;
};
