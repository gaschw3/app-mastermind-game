import { GameState, getFeedback } from "../lib/data";

/** Props for Guess component */
interface GuessProps {
    /** The guess to display */
    guess: GameState["guesses"][number];
    solution: GameState["solution"];
    /** The number of the guess */
    guessNumber: number;
}

export function Guess(props: GuessProps) {
    const digits = props.guess.guess;
    const feedback = getFeedback(props.guess.guess, props.solution);

    return (
        <div class="card mt-3">
            <div class="card-header">Guess {props.guessNumber}</div>
            <div class="card-body">
                <div class="row">
                    {digits.map((slot, i) => {
                        let bgClass = "bg-dark";
                        if (feedback[i] === "correct") {
                            bgClass = "bg-success text-white";
                        } else if (feedback[i] === "misplaced") {
                            bgClass = "bg-warning text-dark";
                        }

                        return (
                            <div class="col" key={i}>
                                <div class={`card ${bgClass}`}>
                                    <div class="card-body text-center h1">
                                        {slot === " " ? <span class="text-muted">_</span> : slot}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
