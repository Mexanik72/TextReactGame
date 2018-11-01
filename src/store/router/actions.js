import * as types from "./actionTypes";

export const switchPage = page => dispatch => {
    dispatch({ type: types.SWITCH_PAGE, page });
};
