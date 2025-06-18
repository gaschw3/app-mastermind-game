import { useState, useRef } from "preact/hooks";
import { GameState, GameSettings, getFeedback } from "../lib/data";

/** Props for the NewGuess component */
interface NewGuessProps {
    /** The game settings */
    settings: GameSettings;
    /** Function to add a new guess */
    addGuess: (guess: string[]) => void;
    /** Function to give up */
    giveUp: () => void;
    /** If all the inputs should be disabled due to the game being over */
    disabled: boolean;
    solution: GameState["solution"];
}

export function NewGuess(props: NewGuessProps) {
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [guess, setGuess] = useState<string[]>(
        Array(props.settings.slots).fill("")
    );

    const handleSubmitGuess = (guess: string[]) => {
        setHasSubmitted(true);
        const allFilled = guess.every(char => char.length === 1);
        if (!allFilled) return;

        const feedback = getFeedback(guess, props.solution);
        props.addGuess(guess);

        const newGuess = guess.map((char, i) =>
            feedback[i] === "correct" ? char : ""
        );
        setGuess(newGuess);

        requestAnimationFrame(() => {
            inputRefs.current[0]?.focus();
        });
        console.log("Guess:", guess);
        setHasSubmitted(false);
        return props.addGuess(guess);
    };

    const guessIsUnique = new Set(guess).size === guess.length;

    return (
        <div class="card">
            <div class="card-header">New Guess</div>
            <div class="card-body">
                <div class="row">
                    {guess.map((slot, i) => (
                        <div class="col">
                            <input
                                class={`form-control form-control-lg text-center" ${
                                    hasSubmitted && guess[i] === "" ? "is-invalid" : ""
                                }`}
                                type="text"
                                maxLength={1}
                                value={guess[i]}
                                ref={(el) => (inputRefs.current[i] = el)}
                                onKeyDown={(e) => {
                                    const key = e.key;

                                    if (key === "Enter") {
                                        // Submit if valid and not disabled
                                        const isReady =
                                            !props.disabled &&
                                            (!props.settings.slotsUnique || new Set(guess).size === guess.length) &&
                                            guess.every((g) => g.length === 1); // ensure every field is filled

                                        if (isReady) {
                                            handleSubmitGuess(guess);
                                        }
                                        return;
                                    }

                                    // Allow navigation keys
                                    if (key === "Backspace") {
                                        const newGuess = [...guess];
                                        newGuess[i] = "";
                                        setGuess(newGuess);

                                        if (i > 0) {
                                            inputRefs.current[i - 1]?.focus();
                                        }
                                        e.preventDefault();
                                    } else if (/^[a-zA-Z0-9 ]$/.test(key)) {
                                        const newGuess = [...guess];
                                        newGuess[i] = key === " " ? " " : key.toUpperCase();
                                        setGuess(newGuess);

                                        if (i < inputRefs.current.length - 1) {
                                            requestAnimationFrame(() => {
                                                inputRefs.current[i + 1]?.focus();
                                            });
                                        }
                                        e.preventDefault(); // Block the browser's default character insert
                                    }
                                }}
                                onFocus={(e) => e.currentTarget.select()}
                                disabled={props.disabled}
                            />
                        </div>
                    ))}
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <span class="text-danger">
                        {props.settings.slotsUnique &&
                            !guessIsUnique && hasSubmitted &&
                            "Your guess cannot contain duplicate numbers."}
                        {!(guess.every((g) => g.length === 1)) && hasSubmitted &&
                        "Your guess can't contain null strings."}
                    </span>
                    <div>
                        {/*<button
                            class="btn btn-outline-danger btn-lg me-3"
                            onClick={props.giveUp}
                            disabled={props.disabled}
                        >
                            <i class="bi bi-emoji-frown me-2"></i>
                            Give Up
                        </button>*/}
                        <button
                            class="btn btn-primary btn-lg"
                            onClick={() => handleSubmitGuess(guess)}
                            disabled={
                                (props.settings.slotsUnique &&
                                    !guessIsUnique) ||
                                (props.disabled)
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
