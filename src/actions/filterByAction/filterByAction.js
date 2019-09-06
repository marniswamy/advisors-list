import { ADVISOR_LIST_ACTIONS } from "../../constants/ADVISOR_LIST_ACTIONS";

/**
 * A small description explaining where this function is used and why
 */
export const filterByAction = payload => ({
    type: ADVISOR_LIST_ACTIONS.FILTER_BY,
    payload,
});
