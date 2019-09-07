import { createSelector } from 'reselect';
import { sortBy, get } from 'lodash';

/**
 * getAdvisorsList will provide the all advisors detials from the store
 *
 * @param {{}} state - the redux state
 * @returns {*} the selected param
 */
export const getAdvisorsList = state => get(
  state,
  'advisorsList',
  [],
);

/**
 * advisorsListSelector will provide the all advisors detials from the store
 * by default theay are sorted by name
 */
export const advisorsListSelector = createSelector(
  getAdvisorsList,
  advisorsList => sortBy(advisorsList, ['name'])
);
