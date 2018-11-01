import pages from "constants/pages";
import * as types from "./actionTypes";

const initialState = {
    currentPage: pages.START_GAME
};

export default function router(state = initialState, action) {
    switch (action.type) {
        case types.SWITCH_PAGE: {
            return {
                ...state,
                currentPage: action.page
            };
        }

        default:
            return state;
    }
}

export const getCurrentPage = state => state.router.currentPage;
