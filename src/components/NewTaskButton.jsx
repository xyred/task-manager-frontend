import { useState } from 'react';
import TaskForm from './TaskForm';

export default function NewTaskButton({ onTaskCreated }) {
    const [isFormOpen, setIsFormOpen] = useState(false);

    function handleClick() {
        setIsFormOpen(true);
    }

    function handleSubmit(taskData) {
        onTaskCreated(taskData);
        setIsFormOpen(false);
    }

    function handleCancel() {
        setIsFormOpen(false);
    }

    return (
        <div>
            {!isFormOpen && (
                <button className='new-task-button' onClick={handleClick}>Add New Task</button>
            )}
            {isFormOpen && (
                <TaskForm
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
}
