import './TaskCard.css';

export default function TaskCard({ task }) {

    const { title, description, status, assignees } = task;

    return (
        <div className='task-card'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Status: {status}</p>

        </div>
    );
}
