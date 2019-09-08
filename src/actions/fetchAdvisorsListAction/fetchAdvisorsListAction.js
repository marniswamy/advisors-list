import { ADVISOR_LIST_ACTIONS } from "../../constants/ADVISOR_LIST_ACTIONS";

/**
 * fetchAdvisorsListAction will triggered to save the advisors fetching
 * action from the api to store
 */
export const fetchAdvisorsListAction = (payload) => ({
    type: ADVISOR_LIST_ACTIONS.FETCH_ADVISORS_LIST,
    payload
});