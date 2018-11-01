import * as types from "./actionTypes";

const initialState = {
    money: 10,
    pumpkin: 0,
    booster: 0,
    seed: 0
};

export default function inventory(state = initialState, action) {
    switch (action.type) {
        case types.BUY_SEED: {
            return {
                ...state,
                seed: state.seed + action.amount,
                money: state.money - action.amount
            };
        }

        case types.SELL_PUMPKINS: {
            return {
                ...state,
                pumpkin: 0,
                money: state.money + state.pumpkin * 5
            };
        }

        case types.BUY_BOOST: {
            return {
                ...state,
                booster: state.booster + action.amount,
                money: state.money - action.amount * 5
            };
        }

        case types.DECR_SEED: {
            return {
                ...state,
                seed: state.seed - 1
            };
        }

        case types.DECR_BOOST: {
            return {
                ...state,
                booster: state.booster - 1
            };
        }

        case types.ADD_PUMPKIN: {
            return {
                ...state,
                pumpkin: state.pumpkin + 1
            };
        }

        default:
            return state;
    }
}

export const getMoney = state => state.inventory.money;

export const getPumpkin = state => state.inventory.pumpkin;

export const getBooster = state => state.inventory.booster;

export const getSeed = state => state.inventory.seed;
