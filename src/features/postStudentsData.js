import apiClient from "../services/apiClient";
export const addStudent = async(studentData) =>{
    try {
        const response = await apiClient.post('/students', studentData);
        return response.data
    } catch (error) {
        throw error.response?.data || 'Failed to add student';
    } 
}