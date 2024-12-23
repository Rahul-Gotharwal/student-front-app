import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addStudent } from './postStudentsData';

// Async Thunk for Adding a Student
export const addStudentAsync = createAsyncThunk(
  'studentspost/addStudent',
  async (studentData, { rejectWithValue }) => {
    try {
      return await addStudent(studentData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const studentSlice = createSlice({
  name: 'studentspost',
  initialState: {
    students: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addStudentAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addStudentAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.students.push(action.payload);
      })
      .addCase(addStudentAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default studentSlice.reducer;
