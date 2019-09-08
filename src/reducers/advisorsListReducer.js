import { INITIAL_STATE } from '../constants/INITIAL_STATE';
import { ADVISOR_LIST_ACTIONS } from '../constants/ADVISOR_LIST_ACTIONS';
import { filterByReducer } from '../reducers/filterByReducer';
import { sortByReducer } from '../reducers/sortByReducer';
import { fetchAdvisorsListReducer } from '../reducers/fetchAdvisorsListReducer';


const reducers = {
  [ADVISOR_LIST_ACTIONS.FILTER_BY]: filterByReducer,
  [ADVISOR_LIST_ACTIONS.SORT_BY]: sortByReducer,
  [ADVISOR_LIST_ACTIONS.FETCH_ADVISORS_LIST]: fetchAdvisorsListReducer
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
