import { useEffect, useState } from 'react';
import './TaskForm.css';

export default function TaskForm({ initialData = {}, onSubmit, onCancel, isLoading, error }) {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    useEffect(() => {
        if (initialData.title) setTaskTitle(initialData.title);
        if (initialData.description) setTaskDescription(initialData.description);
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskTitle) {
            alert('Task title is required');
            return;
        }
        onSubmit({ ...initialData, title: taskTitle, description: taskDescription });
        setTaskTitle('');
        setTaskDescription('');
    };

    return (
        <div className="task-form-overlay">
            <div className="task-form-container">
                <form onSubmit={handleSubmit}>
                    <h2>{initialData.id ? 'Edit Task' : 'New Task'}</h2>
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Task Description"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                    />
                    <div className="task-form-actions">
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Saving...' : initialData.id ? 'Update Task' : 'Create Task'}
                        </button>
                        <button type="button" onClick={onCancel}>
                            Cancel
                        </button>
                    </div>
                    {error && <p className="task-form-error">{error}</p>}
                </form>
            </div>
        </div>
    );
}
