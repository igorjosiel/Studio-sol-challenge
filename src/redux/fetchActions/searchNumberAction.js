import api from "../../services/api";

import { typeLoading, typeSuccess, typeError } from "../store/searchNumber";

export const searchNumberAction = () => {
    return async (dispatch) => {
        dispatch(typeLoading());
        try {
            const response = await api.get(`rand?min=1&max=300`);
            dispatch(typeSuccess(response?.data));
        } catch (error) {
            dispatch(typeError(error?.response?.data));
        }
    };
};