import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * Description of what data this get function is getting
 *
 * @param {{}} state - the redux state
 * @returns {*} the selected param
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
 * A description explaining what data we are getting and where we are using it.
 */
export const languageOptionsSelector = createSelector(
  getLanguageOptions,
  languageOptions => languageOptions,
);
