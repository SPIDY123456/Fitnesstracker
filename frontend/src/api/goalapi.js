import axios from "axios";

const API_URL = `http://localhost:4000/api/goal`;

const getToken = () => localStorage.getItem('token');


export const getUserGoals = async () => {
    const token = getToken();

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
    const response = await axios.get(`${API_URL}/getuser`,config);
    return response.data;

};

export const setGoal = async (GoalData) => {
    const token = getToken();

    const config = {
        headers: {
            
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.post(`${API_URL}/set`,GoalData,config);
    return response.data;
}

