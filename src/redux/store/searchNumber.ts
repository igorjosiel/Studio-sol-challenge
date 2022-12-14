import { createAction, createReducer } from "@reduxjs/toolkit";
import colors from "../../styles/colors";

const { error, success, orange } = colors;

const INITIAL_STATE = {
  loading: false,
  searchedNumber: 0,
  success: false,
  error: false,
  message: "",
  colorMessage: "",

  leds: [
    {
      first: "on",
      second: "on",
      third: "on",
      fourth: "on",
      fifth: "on",
      sixth: "on",
      seventh: "off",
    },
  ],
};

export const typeLoading = createAction("TYPE_LOADING");
export const typeSuccess = createAction("TYPE_SUCCESS");
export const typeError = createAction("TYPE_ERROR");

export const typeChangeLeds = createAction("TYPE_CHANGE_LEDS");

export default createReducer(INITIAL_STATE, {
  [typeLoading.type]: (state) => {
    return {
      ...state,
      loading: true,
      searchedNumber: 0,
      success: false,
      error: false,
      message: "",
      colorMessage: "",

      leds: [
        {
          first: "on",
          second: "on",
          third: "on",
          fourth: "on",
          fifth: "on",
          sixth: "on",
          seventh: "off",
        },
      ],
    };
  },
  [typeSuccess.type]: (state, { payload }) => {
    return {
      ...state,
      loading: false,
      searchedNumber: payload?.value,
    };
  },
  [typeError.type]: (state) => {
    return {
      ...state,
      loading: false,
      message: "ERRO",
      error: true,
      colorMessage: error,
    };
  },
  [typeChangeLeds.type]: (state, { payload }) => {
    const { leds, guessNumber } = payload;

    return {
      ...state,
      leds: leds,
      success: state?.searchedNumber == guessNumber ? true : false,
      message:
        state?.searchedNumber > guessNumber
          ? "É maior"
          : state?.searchedNumber !== 0 && state?.searchedNumber < guessNumber
          ? "É menor"
          : state?.searchedNumber == guessNumber
          ? "Você acertou!!!"
          : "ERRO",
      colorMessage:
        state?.searchedNumber !== 0
          ? state?.searchedNumber > guessNumber ||
            state?.searchedNumber < guessNumber
            ? orange
            : success
          : error,
    };
  },
});
