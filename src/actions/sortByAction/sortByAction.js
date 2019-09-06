import { ADVISOR_LIST_ACTIONS } from "../../constants/ADVISOR_LIST_ACTIONS";

/**
 * sortByAction
 *
 * @param {*} payload - as a parameter
 */
export const sortByAction = payload => ({
    type: ADVISOR_LIST_ACTIONS.SORT_BY,
    payload,
});