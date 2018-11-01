import * as inventoryActions from "store/inventory/actions";
import * as types from "./actionTypes";

export const collectPumpkin = id => dispatch => {
    dispatch({ type: types.COLLECT_PUMPKIN, id });

    dispatch(inventoryActions.addPumpkin());
};

export const plantSeed = () => dispatch => {
    dispatch({ type: types.PLANT_SEED });

    dispatch(inventoryActions.decrSeed());
};

export const updateGarden = () => dispatch => {
    dispatch({ type: types.UPDATE_GARDEN });
};

export const useBoost = id => dispatch => {
    dispatch({ type: types.USE_BOOST, id });

    dispatch(inventoryActions.decrBoost());
};
