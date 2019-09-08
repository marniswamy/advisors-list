import { ADVISOR_LIST_ACTIONS } from "../../constants/ADVISOR_LIST_ACTIONS";

/**
 * sortByAction to trigger when sort dropdown changes
 *
 * @param {*} payload - selected dort value as a payload
 */
export const sortByAction = payload => ({
    type: ADVISOR_LIST_ACTIONS.SORT_BY,
    payload,
});