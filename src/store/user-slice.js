import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    user: null
}

const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
        setAuth: (state, action) => {
            const user = action.payload;
            if (user != null)
                state.isAuth = true;
            else
                state.isAuth = false;
            state.user = user;
        }
    }

});


export const { setAuth } = userSlice.actions;
export default userSlice.reducer;