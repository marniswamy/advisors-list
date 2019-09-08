import { createSelector } from 'reselect';
import { sortBy, get } from 'lodash';
import { statusAndLanguageFilterSelector } from '../statusAndLanguageFilterSelector';


/**
 * getSortedAdvisorsList will give the list after appling sorting filter
 * on top of the filtered list
 *
 * @param {{}} state - the redux state as a param
 * @returns {*} the filtered and sorted advisors list
 */
export const getSortedAdvisorsList = state => {
  const advisorsList = statusAndLanguageFilterSelector(state);
  const reviewFilter = get(state, 'selectedSorting', '');

  if (reviewFilter === 0) {
    return sortBy(advisorsList, ['reviews']).reverse();
  }

  if (reviewFilter === 1) {
    return sortBy(advisorsList, ['reviews']);
  }

  return advisorsList;
}

/**
 * sortedAdvisorsListSelector will give the list after appling sorting filter
 * on top of the filtered list
 */
export const sortedAdvisorsListSelector = createSelector(
  getSortedAdvisorsList,
  sortedAdvisorsList => sortedAdvisorsList,
);
