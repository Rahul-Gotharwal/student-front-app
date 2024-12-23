import axios from 'axios';
import { setCourses, setError, setLoading } from './studentSlice';

export const fetchStudents = (className, yearName) => async (dispatch) => {
  dispatch(setLoading()); // Start loading state
  try {
    // because we have the space in the CBSE 9 so we got the worng url , thats why we have to encode it
    const encodedClassName = encodeURIComponent(className)
    const encodedYearName = encodeURIComponent(yearName);

    // Fetch data from the API with encoded parameters
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/classes/${encodedClassName}/year/${encodedYearName}`);
    
    // Dispatch the courses data to the Redux store
    dispatch(setCourses(response.data)); 
    console.log(response.data);
  } catch (error) {
    // Handle error and update state
    dispatch(setError(error.message || 'Failed to fetch students'));
    console.error('Error fetching students:', error);
  }
}; 
