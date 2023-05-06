import { useState } from "preact/hooks";
import { GameSetup } from "./components/GameSetup";
import { GiveUpCard } from "./components/GiveUpCard";
import { Guess } from "./components/Guess";
import { HelpDialog } from "./components/HelpDialog";
import { NewGuess } from "./components/NewGuess";
import { VictoryCard } from "./components/VictoryCard";
import { GameState } from "./lib/data";
import { useGameSettings } from "./lib/hooks";
import { calculateGuess } from "./lib/util";

export function App() {
    const [settings, setSettings] = useGameSettings();
    // `null` means the game hasn't started yet.
    const [gameState, setGameState] = useState<GameState | null>(null);
    const [showHelp, setShowHelp] = useState(false);

    return (
        <div class="container mx-auto my-5">
            <div class="d-flex justify-content-between align-items-center mb-5 flex-wrap">
                <h1>Mastermind</h1>
                <div>
                    <button
                        class="btn btn-info me-2"
                        onClick={() => setShowHelp(true)}
                    >
                        <i class="bi bi-question-circle me-2" />
                        Help
                    </button>
                    <a
                        href="https://lixquid.com"
                        class="btn btn-outline-primary float-end"
                    >
                        <i class="bi bi-box-arrow-up-right me-2" />
                        lixquid.com
                    </a>
                </div>
            </div>
            {gameState === null && (
                <GameSetup
                    settings={settings}
                    setSettings={setSettings}
                    startGame={setGameState}
                />
            )}
            {gameState !== null && (
                <>
                    <NewGuess
                        settings={settings}
                        addGuess={(guess) => {
                            const guessObj = calculateGuess(
                                guess,
                                gameState.solution
                            );
                            setGameState({
                                ...gameState,
                                guesses: [...gameState.guesses, guessObj],
                                ended:
                                    guessObj.correct === settings.slots
                                        ? "won"
                                        : undefined,
                            });
                        }}
                        giveUp={() => {
                            setGameState({
                                ...gameState,
                                ended: "gaveUp",
                            });
                        }}
                        disabled={gameState.ended !== undefined}
                    />
                    {gameState.ended === "won" && (
                        <VictoryCard newGame={() => setGameState(null)} />
                    )}
                    {gameState.ended === "gaveUp" && (
                        <GiveUpCard
                            solution={gameState.solution}
                            newGame={() => setGameState(null)}
                        />
                    )}
                    {/* Render the guesses in reverse order so the newest guess is at the top */}
                    {gameState.guesses
                        .slice()
                        .reverse()
                        .map((guess, i) => (
                            <Guess
                                guess={guess}
                                guessNumber={gameState.guesses.length - i}
                                key={i}
                            />
                        ))}
                </>
            )}
            {showHelp && <HelpDialog close={() => setShowHelp(false)} />}
        </div>
    );
}
