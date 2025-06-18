//#region GameSettings
/** Container for game settings */
export interface GameSettings {
    /** The number of slots to try and guess */
    slots: number;
    /** The maximum number of each slot value */
    slotMax: number;
    /** If slots should be unique */
    slotsUnique: boolean;
}

/** Default game settings */
export function initialGameSettings(): GameSettings {
    return {
        slots: 4,
        slotMax: 6,
        slotsUnique: true,
    };
}

/** Returns if the given object is a valid {@link GameSettings} */
export function isGameSettings(settings: unknown): settings is GameSettings {
    return (
        typeof settings === "object" &&
        settings !== null &&
        typeof (settings as GameSettings).slots === "number" &&
        typeof (settings as GameSettings).slotMax === "number" &&
        typeof (settings as GameSettings).slotsUnique === "boolean"
    );
}

/** Returns if the given {@link GameSettings} are valid */
export function validateGameSettings(settings: GameSettings): 
{ valid: boolean } & { [k in keyof GameSettings]: string[] } {
    const errors: { valid: boolean } & { [k in keyof GameSettings]: string[] } = {
        slots: [],
        slotMax: [],
        slotsUnique: [],
        valid: true,
    };
    if (settings.slots < 1) {
        errors.valid = false;
        errors.slots.push("Slots count must be at least 1");
    }
    if (settings.slotMax < 1) {
        errors.valid = false;
        errors.slotMax.push("Slot maximum must be at least 1");
    }
    if (settings.slotsUnique && settings.slotMax < settings.slots) {
        errors.valid = false;
        errors.slotMax.push(
            "Slot max must be at least equal to the number of slots, if slots are unique"
        );
    }
    return errors;
}
//#endregion GameSettings

//#region GameState
/** Container for game state */
export interface GameState {
    /** The solution to the game.
     *  Range: 1 <= n <= {@link GameSettings#slotMax}. */
    solution: string[];
    /** The current guess */
    guess: string[];
    /** Previous guesses */
    guesses: {
        /** The guess */
        guess: string[];
        /** The number of correct slots */
        correct: number;
        /** The number of slots with the correct value but in the wrong position */
        misplaced: number;
    }[];
    /** End game state */
    ended: undefined | "won" | "gaveUp";
}

/** Creates a new game state */
export function newGameState(settings: GameSettings): GameState {
    return {
        solution: randomSolution(settings),
        guess: new Array(settings.slots).fill(0),
        guesses: [],
        ended: undefined,
    };
}

/** Returns a random solution for the given settings */
export function randomSolution(settings: GameSettings): string[] {
    if (settings.slotsUnique) {
        // If unique, generate a range of numbers, shuffle,
        // and take the first n
        const solution = Array.from(
            { length: settings.slotMax },
            (_, i) => String(i + 1)
        );
        for (let i = solution.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [solution[i], solution[j]] = [solution[j], solution[i]];
        }
        return solution.slice(0, settings.slots);
    } else {
        // If not unique, generate n random numbers
        const solution: string[] = [];
        for (let i = 0; i < settings.slots; i++) {
            solution.push(String(Math.floor(Math.random() * settings.slotMax) + 1));
        }
        return solution;
    }
}
//#endregion GameState


export type Feedback = "correct" | "misplaced" | "absent";

export function getFeedback(guess: string[], solution: string[]): Feedback[] {
    const feedback: Feedback[] = Array(guess.length).fill("absent");
    const used = Array(solution.length).fill(false);

    for (let i = 0; i < guess.length; i++) {
        if (guess[i].toLowerCase() === solution[i].toLowerCase()) {
            feedback[i] = "correct";
            used[i] = true;
        }
    }

    for (let i = 0; i < guess.length; i++) {
        if (feedback[i] !== "absent") continue;
        for (let j = 0; j < solution.length; j++) {
            if (!used[j] && guess[i].toLowerCase() === solution[j].toLowerCase()) {
                feedback[i] = "misplaced";
                used[j] = true;
                break;
            }
        }
    }

    return feedback;
}
