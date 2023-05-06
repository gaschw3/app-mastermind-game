import { GameState } from "../lib/data";

/** Props for Guess component */
interface GuessProps {
    /** The guess to display */
    guess: GameState["guesses"][number];
    /** The number of the guess */
    guessNumber: number;
}

export function Guess(props: GuessProps) {
    return (
        <div class="card mt-3">
            <div class="card-header">Guess {props.guessNumber}</div>
            <div class="card-body">
                <div class="row">
                    {props.guess.guess.map((slot, i) => {
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
            </div>
            <div class="card-body border-top">
                <div class="row">
                    <div class="col text-center">
                        <div class="card-text text-success h3">
                            <i class="bi bi-check-circle me-2" />
                            Correct: <strong>{props.guess.correct}</strong>
                        </div>
                    </div>
                    <div class="col text-center">
                        <div class="card-text text-warning h3">
                            <i class="bi bi-exclamation-circle me-2" />
                            Misplaced: <strong>{props.guess.misplaced}</strong>
                        </div>
                    </div>
                    <div class="col text-center">
                        <div class="card-text text-danger h3">
                            <i class="bi bi-x-circle me-2" />
                            Incorrect:{" "}
                            <strong>
                                {props.guess.guess.length -
                                    props.guess.correct -
                                    props.guess.misplaced}
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
