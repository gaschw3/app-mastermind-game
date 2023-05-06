/** Props for VictoryCard component */
interface VictoryCardProps {
    /** Function to start a new game */
    newGame: () => void;
}

export function VictoryCard(props: VictoryCardProps) {
    return (
        <div class="card mt-3 border-success">
            <div class="card-header">Victory!</div>
            <div class="card-body">
                <div class="card-text text-success h1">
                    <i class="bi bi-trophy me-2" />
                    You won!
                </div>
                <div class="d-flex justify-content-end align-items-center mt-3">
                    <button
                        class="btn btn-primary btn-lg"
                        onClick={props.newGame}
                    >
                        <i class="bi bi-arrow-repeat me-2" />
                        New Game
                    </button>
                </div>
            </div>
        </div>
    );
}
