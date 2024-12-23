import { configureStore } from '@reduxjs/toolkit';
import courseReducer from '../features/studentSlice'
import studentReducer from "../features/studentPostSlice"
const store = configureStore({
  reducer: {
  courses: courseReducer,
  studentspost: studentReducer, 
  
  },
});

export default store;


