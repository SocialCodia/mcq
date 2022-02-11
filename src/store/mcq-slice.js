import { createSlice } from '@reduxjs/toolkit';


const initialState = {

    mcqs: [],
    filteredMcqs: [],
    isMcqsLoading: true,
    count: 0,
}


const mcqSlice = createSlice({
    initialState,
    name: 'mcqSlice',
    reducers: {
        setMcqs: (state, action) => {
            state.mcqs = action.payload;
            state.filteredMcqs = action.payload;
            state.isMcqsLoading = false;
        },

        // filterMcqByQuestion: (state=initialState, action) => {
        //     const value = action.payload;
        //     const works = state.mcqs.filter((val) => val.includes({question:value}));
        //     console.log({works});
        //     return {...state, value, works};
        // }

        filterMcqByQuestion: (state = initialState, action) => {
            state.filteredMcqs = state.mcqs.filter(val => val.question.toLowerCase().includes(action.payload.toLowerCase()))
        },
        filterMcqByAnswer: (state = initialState, action) => {
            state.filteredMcqs = state.mcqs.filter(val =>
                val.opOne.toLowerCase().includes(action.payload.toLowerCase())
                || val.opTwo.toLowerCase().includes(action.payload.toLowerCase())
                || val.opThree.toLowerCase().includes(action.payload.toLowerCase())
                || val.opFour.toLowerCase().includes(action.payload.toLowerCase())
            )
        }
    }
});

export const { setMcqs, filterMcqByQuestion, filterMcqByAnswer } = mcqSlice.actions;
export default mcqSlice.reducer;
