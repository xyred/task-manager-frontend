const TaskList = ({ tasks }) => {

    return (
        <div>
            <h2>Task List</h2>
            {tasks.length > 0 ? (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <strong>{task.title}</strong>: {task.description}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
};

export default TaskList;
