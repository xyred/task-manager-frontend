const TaskCard = ({ task }) => {
    const { title, description, status, assignees } = task;

    return (
        <div className='task'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Status: {status}</p>
        </div>
    );
};

export default TaskCard;
