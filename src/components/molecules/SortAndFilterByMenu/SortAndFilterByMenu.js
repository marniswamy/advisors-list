import * as React from 'react';
import { SortByContainer } from '../../../containers/atoms/SortByContainer';
import { FilterByLanguageContainer } from '../../../containers/atoms/FilterByLanguageContainer';
import { FilterByStatusContainer } from '../../../containers/atoms/FilterByStatusContainer';

/**
 * SortAndFilterByMenu component holds the sort and filter componets for the
 * advisors list
 *
 * @returns {*} a React Stateless Functional Component
 */
export const SortAndFilterByMenu = () => (
  <div className="sort-filter-menu">
    <SortByContainer />
    <FilterByLanguageContainer />
    <FilterByStatusContainer />
  </div>
);