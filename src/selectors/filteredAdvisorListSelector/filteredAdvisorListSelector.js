import { createSelector } from 'reselect';
import { sortBy, get } from 'lodash';
import { statusAndLanguageFilterSelector } from '../statusAndLanguageFilterSelector';

/**
 * Description of what data this get function is getting
 *
 * @param {{}} state - the redux state
 * @returns {*} the selected param
 */
export const getFilteredAdvisorList = state => {
  const advisorsList = statusAndLanguageFilterSelector(state);
  const reviewFilter = get(state, 'selectedSorting', '');

  if (reviewFilter === 0) {
    return sortBy(advisorsList, ['reviews']).reverse();
  }

  if (reviewFilter === 1) {
    return sortBy(advisorsList, ['reviews']);
  }

  return advisorsList;
};

/**
 * A description explaining what data we are getting and where we are using it.
 */
export const filteredAdvisorListSelector = createSelector(
  getFilteredAdvisorList,
  filteredAdvisorList => filteredAdvisorList,
);
