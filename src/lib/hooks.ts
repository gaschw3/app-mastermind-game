import { useEffect, useState } from "preact/hooks";
import { initialGameSettings, isGameSettings } from "./data";

/** Wrapper for {@link GameSettings} state, which automatically saves to local storage */
export function useGameSettings() {
    const [settings, setSettings] = useState(() => {
        const stored = localStorage.getItem("settings");
        if (stored !== null) {
            try {
                const parsed = JSON.parse(stored);
                if (isGameSettings(parsed)) {
                    return parsed;
                }
            } catch (e) {
                console.warn("Failed to parse stored settings", e);
            }
        }
        return initialGameSettings();
    });
    useEffect(() => {
        localStorage.setItem("settings", JSON.stringify(settings));
    }, [settings]);
    return [settings, setSettings] as const;
}
