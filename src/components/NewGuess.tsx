import { useState } from "preact/hooks";
import { GameSettings } from "../lib/data";

/** Props for the NewGuess component */
interface NewGuessProps {
    /** The game settings */
    settings: GameSettings;
    /** Function to add a new guess */
    addGuess: (guess: number[]) => void;
    /** Function to give up */
    giveUp: () => void;
    /** If all the inputs should be disabled due to the game being over */
    disabled: boolean;
}

export function NewGuess(props: NewGuessProps) {
    const [guess, setGuess] = useState<number[]>(
        Array.from(Array(props.settings.slots).keys()).map(() => 1)
    );

    const guessIsUnique = new Set(guess).size === guess.length;

    return (
        <div class="card">
            <div class="card-header">New Guess</div>
            <div class="card-body">
                <div class="row">
                    {guess.map((slot, i) => (
                        <div class="col">
                            <select
                                class="form-select form-select-lg"
                                value={slot}
                                onChange={(e) => {
                                    const newGuess = [...guess];
                                    newGuess[i] = parseInt(
                                        e.currentTarget.value
                                    );
                                    setGuess(newGuess);
                                }}
                                disabled={props.disabled}
                            >
                                {Array.from(
                                    Array(props.settings.slotMax).keys()
                                ).map((choice) => (
                                    <option value={choice + 1}>
                                        {choice + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <span class="text-danger">
                        {props.settings.slotsUnique &&
                            !guessIsUnique &&
                            "Your guess cannot contain duplicate numbers."}
                    </span>
                    <div>
                        <button
                            class="btn btn-outline-danger btn-lg me-3"
                            onClick={props.giveUp}
                            disabled={props.disabled}
                        >
                            <i class="bi bi-emoji-frown me-2"></i>
                            Give Up
                        </button>
                        <button
                            class="btn btn-primary btn-lg"
                            onClick={() => {
                                console.log("Guess:", guess);
                                return props.addGuess(guess);
                            }}
                            disabled={
                                (props.settings.slotsUnique &&
                                    !guessIsUnique) ||
                                props.disabled
                            }
                        >
                            <i class="bi bi-check-circle me-2"></i>
                            Guess
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
