import useBoards from "../hooks/useBoards";
import Board from "./Board";
import "./BoardContainer.css";

export default function BoardContainer() {
    const { boards, loading, error } = useBoards();

    if (loading) return <p>Loading boards...</p>;
    if (error) return <p>Error loading boards: {error}</p>;

    return (
        <div className="board-container">
            {boards.map((board) => (
                <Board key={board.id} board={board} />
            ))}
        </div>
    );
}
