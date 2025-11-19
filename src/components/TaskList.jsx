import './TaskList.css';
import useTasks from '../hooks/useTasks';
import TaskCard from './TaskCard';

const TaskList = ({ taskList }) => {

    const { tasks, loading, error } = useTasks(taskList.id);

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>Error loading tasks: {error}</p>;

    return (
        <div className='task-list'>
            <h4>{taskList.title}</h4>
            {tasks.length > 0 ? (
                <div className='tasks'>
                    {tasks.map((task) => (
                        <div key={task.id}>
                            <TaskCard key={task.id} task={task} />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
};

export default TaskList;
