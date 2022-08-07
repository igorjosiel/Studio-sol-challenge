import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    loading: false,
    searchedNumber: 0,
    error: false,
    message: '',
};

export const typeLoading = createAction('TYPE_LOADING');
export const typeSuccess = createAction('TYPE_SUCCESS');
export const typeError = createAction('TYPE_ERROR');

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
    [typeSuccess.type]: (state) => {
        return {
            ...state,
            loading: false,
            message: 'Erro',
        }
    }
});
