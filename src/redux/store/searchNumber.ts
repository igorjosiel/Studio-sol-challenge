import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    loading: false,
    searchedNumber: 0,
    error: false,
    message: '',

    leds: {
        first: "active",
        second: "active",
        third: "active",
        fourth: "active",
        fifth: "active",
        sixth: "active",
        seventh: "not_active",
    },
};

export const typeLoading = createAction('TYPE_LOADING');
export const typeSuccess = createAction('TYPE_SUCCESS');
export const typeError = createAction('TYPE_ERROR');

export const typeChangeLeds = createAction('TYPE_CHANGE_LEDS');

export default createReducer(INITIAL_STATE, {
    [typeLoading.type]: (state) => {
        return {
            ...state,
            loading: true,
        };
    },
    [typeSuccess.type]: (state, { payload }) => {
        return {
            ...state,
            loading: false,
            searchedNumber: payload?.value,
        }
    },
    [typeError.type]: (state) => {
        return {
            ...state,
            loading: false,
            message: 'Erro',
        }
    },
    [typeChangeLeds.type]: (state, { payload }) => {
        console.log('Payload: ', payload);
        return {
            ...state,
            leds: payload,
        }
    },
});
