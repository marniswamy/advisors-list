import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * getLanguageOptions method gives the options for the language filter from the
 * advisors list from the store
 *
 * @param {{}} state - the redux state as a param
 * @returns {*} the options for the language filter
 */
export const getLanguageOptions = state => {
  const advisorsList = get(state, 'advisorsList', []);
  const locales = advisorsList.map(advisor => advisor.language);
  return [...new Set(locales)].map((locale) => ({
    label: locale,
    value: locale
  })
  );
}

/**
 * languageOptionsSelector gives the options for the language filter from the
 * advisors list from the store
 */
export const languageOptionsSelector = createSelector(
  getLanguageOptions,
  languageOptions => languageOptions,
);
