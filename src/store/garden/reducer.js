import * as types from "./actionTypes";

const initialState = {
    pumpkins: [],
    list: [],
    nextId: 1
};

export default function garden(state = initialState, action) {
    switch (action.type) {
        case types.PLANT_SEED: {
            return {
                ...state,
                pumpkins: [...state.pumpkins, { id: state.nextId, time: 60 }],
                list: [...state.list, state.nextId],
                nextId: state.nextId + 1
            };
        }

        case types.UPDATE_GARDEN: {
            return {
                ...state,
                pumpkins: state.pumpkins.map(item => ({
                    ...item,
                    time: item.time - 1
                }))
            };
        }

        case types.COLLECT_PUMPKIN: {
            return {
                ...state,
                pumpkins: [
                    ...state.pumpkins.filter(item => item.id !== action.id)
                ],
                list: [...state.list.filter(item => item !== action.id)]
            };
        }

        case types.USE_BOOST: {
            return {
                ...state,
                pumpkins: state.pumpkins.map(
                    item =>
                        item.id === action.id
                            ? { ...item, time: item.time / 2 }
                            : item
                )
            };
        }

        default:
            return state;
    }
}

export const getPumpkinsList = state => state.garden.list;

export const getPumpkin = (state, id) =>
    state.garden.pumpkins.find(item => item.id === id);
