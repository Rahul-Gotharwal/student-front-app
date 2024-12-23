import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'courses',  // Correct name for the slice
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setCourses(state, action) {
      state.list = action.payload;
      state.status = 'succeeded';
    },
    setLoading(state) {
      state.status = 'loading';
    },
    setError(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { setCourses, setError, setLoading } = courseSlice.actions;
export default courseSlice.reducer;

