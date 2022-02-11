import { configureStore } from '@reduxjs/toolkit';
import mcqSlice from './mcq-slice';

const store = configureStore({

    reducer: {
        mcqSlice,
    }

});

export default store;