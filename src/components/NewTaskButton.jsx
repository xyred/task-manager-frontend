export default function NewTaskButton() {
    const handleClick = () => {
        // Logic to add a new task can be implemented here
        alert('New Task Button Clicked!');
    };

    return (
        <button className='new-task-button' onClick={handleClick}>Add New Task</button>
    );
}
