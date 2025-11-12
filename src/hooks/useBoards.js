import { useState, useEffect } from 'react';

import API_ENDPOINTS from '../config/api';

const useBoards = () => {
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const res = await fetch(API_ENDPOINTS.BOARDS);
                if (!res.ok) throw new Error('Failed to fetch boards');
                const data = await res.json();
                setBoards(data);
                console.log("Fetched boards:", data);
            } catch (err) {
                console.error("Error fetching boards:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBoards();
    }, []);

    return { boards, loading, error };
};

export default useBoards;
