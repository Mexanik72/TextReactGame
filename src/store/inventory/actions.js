import * as types from "./actionTypes";

export const sellPumpkins = () => dispatch => {
    dispatch({ type: types.SELL_PUMPKINS });
};

export const buySeed = amount => dispatch => {
    dispatch({ type: types.BUY_SEED, amount });
};

export const buyBoost = amount => dispatch => {
    dispatch({ type: types.BUY_BOOST, amount });
};

export const decrSeed = () => dispatch => {
    dispatch({ type: types.DECR_SEED });
};

export const decrBoost = () => dispatch => {
    dispatch({ type: types.DECR_BOOST });
};

export const addPumpkin = () => dispatch => {
    dispatch({ type: types.ADD_PUMPKIN });
};
