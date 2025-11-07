import TaskList from "./TaskList";
import useTasks from "../hooks/useTasks";

const TaskListContainer = () => {
    const { tasks, loading, error } = useTasks();

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>Error loading tasks: {error}</p>;

    return <TaskList tasks={tasks} />;
};

export default TaskListContainer;
