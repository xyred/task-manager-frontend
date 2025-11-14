import { useState, useEffect } from 'react';

import API_ENDPOINTS from '../config/api';

const useTasks = (taskListId) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!taskListId) {
            setError('Task list ID is required to fetch tasks');
            setLoading(false);
            return;
        }

        const fetchTasks = async () => {
            try {
                const res = await fetch(`${API_ENDPOINTS.TASK_LISTS}/${taskListId}/tasks`);
                if (!res.ok) throw new Error('Failed to fetch tasks');
                const data = await res.json();
                setTasks(data);
                console.log(`Fetched tasks for task list ${taskListId}:`, data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, [taskListId]);

    return { tasks, loading, error };
};

export default useTasks;
