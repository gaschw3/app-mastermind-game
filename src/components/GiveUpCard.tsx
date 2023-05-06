import { GameState } from "../lib/data";

/** Props for GiveUpCard component */
interface GiveUpCardProps {
    /** The solution */
    solution: GameState["solution"];
    /** Function to start a new game */
    newGame: () => void;
}

export function GiveUpCard(props: GiveUpCardProps) {
    return (
        <div class="card mt-3 border-warning">
            <div class="card-header">Solution</div>
            <div class="card-body">
                <div class="row">
                    {props.solution.map((slot, i) => {
                        return (
                            <div class="col">
                                <div class="card">
                                    <div class="card-body text-center h1">
                                        {slot}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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
