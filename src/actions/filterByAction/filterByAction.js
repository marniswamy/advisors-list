import { ADVISOR_LIST_ACTIONS } from "../../constants/ADVISOR_LIST_ACTIONS";

/**
 * filterByAction will get dispatched when user changes 
 * the language or status filter
 */
export const filterByAction = payload => ({
    type: ADVISOR_LIST_ACTIONS.FILTER_BY,
    payload,
});
