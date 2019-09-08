/**
 * sortByReducer used to merge the selected sort value merge to redux store
 *
 * @param {{}} state - the Redux state of the reducer
 * @param {*} payload - selected sort key value object as param
 * @returns {*} the updated store
 */
export const sortByReducer = (state, payload) => {
  return {
    ...state,
    ...payload,
  };
};
