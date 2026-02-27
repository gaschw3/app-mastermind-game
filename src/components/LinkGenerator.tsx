import { useState } from "preact/hooks";
import { encryptCodeString } from "../lib/cryptoUtil";

export function LinkGenerator() {
    const [codeInput, setCodeInput] = useState("");
    const [link, setLink] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!/^[\w ]+(:\w)?$/.test(codeInput)) {
            setError("Code must be a string of characters with an optional ':{maxSlots}'(e.g., 1234)");
            setLink(null);
            return;
        }

        const encrypted = await encryptCodeString(codeInput);
        const fullLink = `?code=${encodeURIComponent(encrypted)}`;
        setLink(fullLink);
        setError(null);
    };

    return (
        <div class="container mx-auto my-5">
            <div class="d-flex justify-content-between align-items-center mb-5 flex-wrap">
                <h1>Encode.EXE</h1>
            </div>
            <div class="card mt-4">
                <div class="card-header">Generate Shareable Game Link</div>
                <div class="card-body">
                    <label class="form-label" for="codeInput">
                        Enter the secret code (e.g. <code>1234</code>)
                    </label>
                    <input
                        type="text"
                        id="codeInput"
                        class="form-control mb-2"
                        value={codeInput}
                        onInput={(e) => setCodeInput(e.currentTarget.value)}
                        placeholder="1234"
                    />
                    <button class="btn btn-primary" onClick={handleGenerate}>
                        Generate Link
                    </button>

                    {error && (
                        <div class="alert alert-danger mt-3">{error}</div>
                    )}

                    {link && (
                        <div class="mt-3">
                            <label class="form-label">Shareable Game Link</label>
                            <input
                                class="form-control"
                                readOnly
                                value={link}
                                onFocus={(e) => e.currentTarget.select()}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
