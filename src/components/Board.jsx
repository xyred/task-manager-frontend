import useTaskLists from '../hooks/useTaskLists';
import TaskList from './TaskList';


const Board = ({ board }) => {

    const { taskLists, loading, error } = useTaskLists(board.id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading: {error}</p>;

    return (
        <div className='board'>
            <h3>{board.title}</h3>
            <p>{board.description}</p>
            {taskLists.length > 0 ? (
                <div className='task-lists'>
                    {taskLists.map((taskList) => (
                        <TaskList key={taskList.id} taskList={taskList} />
                    ))}
                </div>
            ) : (
                <p>No task lists available</p>
            )}
        </div>
    );
};

export default Board;
