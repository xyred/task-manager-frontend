import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/tasklists';

const useTaskLists = () => {
    const [taskLists, setTaskLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTaskLists = async () => {
            try {
                const res = await fetch(API_URL);
                if (!res.ok) throw new Error('Failed to fetch task lists');
                const data = await res.json();
                setTaskLists(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTaskLists();
    }, []);

    return { taskLists, loading, error };
};

export default useTaskLists;
