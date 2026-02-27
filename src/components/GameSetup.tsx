import { useState, useEffect } from "preact/hooks";
import { decryptCodeString } from "../lib/cryptoUtil";
import {
    GameSettings,
    GameState,
    newGameState,
    validateGameSettings,
} from "../lib/data";

type CharacterSet = "numeric" | "alpha" | "alphanumeric" | "full-keyboard";

const CHARACTER_SET_MAP: Record<CharacterSet, number> = {
    "numeric": 10,        // 0-9
    "alpha": 26,          // A-Z
    "alphanumeric": 36,   // 0-9, A-Z
    "full-keyboard": 94,  // Full keyboard characters
};

const slotMaxToCharacterSet = (slotMax: number): CharacterSet => {
    if (slotMax === 10) return "numeric";
    if (slotMax === 26) return "alpha";
    if (slotMax === 36) return "alphanumeric";
    if (slotMax === 94) return "full-keyboard";
    return "numeric"; // Default
};

interface GameSetupProps {
    settings: GameSettings;
    setSettings: (settings: GameSettings) => void;
    startGame: (gameState: GameState) => void;
}

export function GameSetup(props: GameSetupProps) {
    const [slots, setSlots] = useState(props.settings.slots);
    const [slotMax, setSlotMax] = useState(props.settings.slotMax);
    const [characterSet, setCharacterSet] = useState<CharacterSet>(
        slotMaxToCharacterSet(props.settings.slotMax)
    );
    const [slotsUnique, setSlotsUnique] = useState(props.settings.slotsUnique);
    const [shareLink, setShareLink] = useState<string>("");

    const handleCharacterSetChange = (newCharSet: CharacterSet) => {
        setCharacterSet(newCharSet);
        setSlotMax(CHARACTER_SET_MAP[newCharSet]);
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const encryptedCode = params.get("code");
        if (!encryptedCode) return;

        decryptCodeString(encryptedCode).then((decoded) => {
            if (!decoded) return;

            const [digitsPart, slotMaxPart] = decoded.split(":");
            if (!/^[\w ]+$/.test(digitsPart)) return;

            const digits = digitsPart.split("").map(String);
            const slotMax = parseInt(slotMaxPart, 10);
            const slots = digits.length;
            const slotsUnique = new Set(digits).size === slots;

            const settings = { slots, slotMax, slotsUnique };
            const errors = validateGameSettings(settings);

            if (errors.valid) {
                props.setSettings(settings);
                const state = newGameState(settings);
                state.solution = digits;
                props.startGame(state);
            }
        });
    }, []);

    const validationErrors = validateGameSettings({
        slots,
        slotMax,
        slotsUnique,
    });

    return (
        <div class="card">
            <div class="card-header">Game Setup</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md mb-5">
                        <label class="form-label" for="code-length">
                            Code Length
                        </label>
                        <input
                            class={`form-control${
                                validationErrors.slots.length > 0
                                    ? " is-invalid"
                                    : ""
                            }`}
                            type="number"
                            id="code-length"
                            min="1"
                            max="10"
                            step="1"
                            value={slots}
                            onInput={(e) => {
                                setSlots(parseInt(e.currentTarget.value));
                            }}
                        />
                        <div class="form-text">
                            The number of slots in the code.
                        </div>
                        {validationErrors.slots.length > 0 && (
                            <div class="invalid-feedback">
                                {validationErrors.slots.join(" ")}
                            </div>
                        )}
                    </div>

                    <div class="col-md mb-5">
                        <label class="form-label" for="code-max">
                            Code Character Set
                        </label>
                        <select
                            class={`form-control${
                                validationErrors.slotMax.length > 0
                                    ? " is-invalid"
                                    : ""
                            }`}
                            id="code-max"
                            value={characterSet}
                            onChange={(e) => {
                                handleCharacterSetChange(e.currentTarget.value as CharacterSet);
                            }}
                        >
                            <option value="numeric">Numeric (0-9)</option>
                            <option value="alpha">Alphabetic (A-Z)</option>
                            <option value="alphanumeric">Alphanumeric (0-9, A-Z)</option>
                            <option value="full-keyboard">Full Keyboard</option>
                        </select>
                        <div class="form-text">
                            The character set available for each slot in the code.
                        </div>
                        {validationErrors.slotMax.length > 0 && (
                            <div class="invalid-feedback">
                                {validationErrors.slotMax.join(" ")}
                            </div>
                        )}
                    </div>

                    <div class="col-md mb-5">
                        <label class="form-label" for="code-unique">
                            Code Slots Unique
                        </label>
                        <div class="col-form-label">
                            <div class="form-check form-switch">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="code-unique"
                                    checked={slotsUnique}
                                    onChange={(e) => {
                                        setSlotsUnique(e.currentTarget.checked);
                                    }}
                                />
                                <label class="form-check-label" for="code-unique">
                                    Unique
                                </label>
                            </div>
                        </div>
                        <div class="form-text">
                            Whether each slot in the code must be unique.
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between align-items-center">
                    <button
                        class="btn btn-primary btn-lg"
                        onClick={() => {
                            props.setSettings({ slots, slotMax, slotsUnique });
                            props.startGame(
                                newGameState({ slots, slotMax, slotsUnique })
                            );
                        }}
                        disabled={!validationErrors.valid}
                    >
                        <i class="bi bi-play-circle me-2"></i>
                        Start Game
                    </button>
                </div>

                {shareLink && (
                    <div class="mt-3">
                        <label class="form-label">Shareable Game Link</label>
                        <input
                            class="form-control"
                            value={shareLink}
                            readOnly
                            onFocus={(e) => e.currentTarget.select()}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
