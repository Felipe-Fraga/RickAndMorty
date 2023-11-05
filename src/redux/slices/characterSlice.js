import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import {
    fetchData
} from '../../functions/api'; 

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
    const response = await fetchData();
    return response;
});

const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        data: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export default charactersSlice.reducer;