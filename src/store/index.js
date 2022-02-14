import { configureStore } from '@reduxjs/toolkit';
import mcqSlice from './mcq-slice';
import userSlice from './user-slice';

const store = configureStore({

    reducer: {
        mcqSlice,
        userSlice,
    }

});

export default store;