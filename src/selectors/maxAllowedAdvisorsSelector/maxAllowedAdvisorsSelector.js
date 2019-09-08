import { createSelector } from 'reselect';
import { advisorsListSelector } from '../advisorsListSelector';

/**
 * maxAllowedAdvisorsSelector gives the flag to infinite scroll component
 * weather how many records has to load from server
 */
export const maxAllowedAdvisorsSelector = createSelector(
  advisorsListSelector,
  advisorsList => advisorsList.length !== 60,
);
