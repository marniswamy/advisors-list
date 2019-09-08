import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * getLanguageFilter method gives the selected language filter from store
 *
 * @param {{}} state - the redux state as a parameter
 * @returns {*} the selected selectedLangauge
 */
export const getLanguageFilter = state => get(state, 'selectedLangauge', '');


/**
 * languageFilterSelector selector gives the selected filter value from store
 */
export const languageFilterSelector = createSelector(
  getLanguageFilter,
  languageFilter => languageFilter,
);
