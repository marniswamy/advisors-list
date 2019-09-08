import { createSelector } from 'reselect';
import filter from 'lodash/filter';
import { advisorsListSelector } from '../advisorsListSelector';
import { statusFilterSelector } from '../statusFilterSelector';
import { languageFilterSelector } from '../languageFilterSelector';


/**
 * statusAndLanguageFilterSelector will give the filtered data based on the selectd filters
 * TODO: refactor this below logic
 */
export const statusAndLanguageFilterSelector = createSelector(
  [
    advisorsListSelector,
    statusFilterSelector,
    languageFilterSelector
  ],
  (
    advisorList,
    status,
    language,
  ) => {
    if (status === "" && language !== "") {
      return filter(advisorList, { 'language': language })
    }
    if (status !== "" && language === "") {
      return filter(advisorList, { 'status': status })
    }
    if (status !== "" && language !== "") {
      return filter(advisorList, { 'language': language, 'status': status })
    }
    return advisorList
  },
);
