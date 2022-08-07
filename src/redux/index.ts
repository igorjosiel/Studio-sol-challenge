import { configureStore } from '@reduxjs/toolkit';
import searchNumber from './store/searchNumber';

export default configureStore({
    reducer: {
        searchNumber,
    },
});
