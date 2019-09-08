/**
 * filterByReducer used to merge the selected filter value merge to redux store
 *
 * @param {{}} state - the Redux state of the reducer
 * @param {*} payload - selected filter key value object as param
 * @returns {*} the updated store
 */
export const filterByReducer = (state, payload) => {
  return {
    ...state,
    ...payload,
  };
};