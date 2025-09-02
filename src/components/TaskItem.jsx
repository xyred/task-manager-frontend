const TaskItem = ({ task }) => (
  <tr>
    <td>{task.id}</td>
    <td>{task.title}</td>
    <td>{task.description}</td>
    <td>{task.status}</td>
  </tr>
);

export default TaskItem;
