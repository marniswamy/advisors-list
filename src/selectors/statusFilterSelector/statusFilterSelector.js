import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * getStatusFilter method returns the selectedStatus value from the store
 *
 * @param {{}} state - the redux state as a param
 * @returns {*} the selectedStatus filter value
 */
export const getStatusFilter = state => get(state, 'selectedStatus', '');

/**
 * statusFilterSelector gives the selected value of the status dropdoen filter
 */
export const statusFilterSelector = createSelector(
  getStatusFilter,
  statusFilter => statusFilter,
);
