import useTasks from '../hooks/useTasks';

const TaskList = () => {

    const { loading, error } = useTasks();

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>Error loading tasks: {error}</p>;

    return (
        <div>
            {/* {tasks.length > 0 ? (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <strong>{task.title}</strong>: {task.description}
                        </li>
                    ))}
                </ul>
            ) : (
            )} */}
            <p>No tasks available</p>
        </div>
    );
};

export default TaskList;
