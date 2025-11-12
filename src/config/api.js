const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

const API_ENDPOINTS = {
    BOARDS: `${API_BASE_URL}/boards`,
    TASK_LISTS: `${API_BASE_URL}/tasklists`,
    TASKS: `${API_BASE_URL}/tasks`,
    USERS: `${API_BASE_URL}/users`,
};

export default API_ENDPOINTS;
