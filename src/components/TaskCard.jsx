const TaskCard = ({ task }) => {
    const { title, description, status, assignees } = task;

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>
                <strong>Status:</strong> {status}
            </p>
            <div>
                <strong>Assignees:</strong>
                {assignees.length > 0 ? (
                    <ul>
                        {assignees.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No assignees</p>
                )}
            </div>
        </div>
    );
};

export default TaskCard;
