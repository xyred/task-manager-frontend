import { useState, useEffect } from 'react';

import API_ENDPOINTS from '../config/api';

const useTaskLists = (boardId) => {
    const [taskLists, setTaskLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!boardId) {
            setError('Board ID is required to fetch task lists');
            setLoading(false);
            return;
        }

        const fetchTaskLists = async () => {
            try {
                const res = await fetch(`${API_ENDPOINTS.TASK_LISTS}/board/${boardId}`);
                if (!res.ok) throw new Error('Failed to fetch task lists');
                const data = await res.json();
                setTaskLists(data);
                console.log(`Fetched task lists for board ${boardId}:`, data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTaskLists();
    }, [boardId]);

    return { taskLists, loading, error };
};

export default useTaskLists;
