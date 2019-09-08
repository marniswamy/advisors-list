import get from 'lodash/get';

/**
 * fetchAdvisorsListReducer used to merge the advisors list to the store
 *
 * @param {{}} state - the Redux state of the reducer
 * @param {*} payload - all advisors from th network call
 * @returns {*} the updated store with advisors list
 */
export const fetchAdvisorsListReducer = (state, payload) => ({
  ...state,
  advisorsList: get(payload, 'data', [])
});