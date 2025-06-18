const keyString = "thisisadndkey123"; // App-only shared key
const encoder = new TextEncoder();
const decoder = new TextDecoder();

async function getKey(): Promise<CryptoKey> {
    return crypto.subtle.importKey(
        "raw",
        encoder.encode(keyString),
        { name: "AES-CTR" },
        false,
        ["encrypt", "decrypt"]
    );
}

export async function encryptCodeString(code: string): Promise<string> {
    const key = await getKey();
    const iv = crypto.getRandomValues(new Uint8Array(16));
    const encoded = encoder.encode(code);

    const encrypted = await crypto.subtle.encrypt(
        { name: "AES-CTR", counter: iv, length: 64 },
        key,
        encoded
    );

    const full = new Uint8Array(iv.length + encrypted.byteLength);
    full.set(iv);
    full.set(new Uint8Array(encrypted), iv.length);

    return btoa(String.fromCharCode(...full));
}

export async function decryptCodeString(encrypted: string): Promise<string | null> {
    try {
        const raw = Uint8Array.from(atob(encrypted), c => c.charCodeAt(0));
        const iv = raw.slice(0, 16);
        const data = raw.slice(16);

        const key = await getKey();
        const decrypted = await crypto.subtle.decrypt(
            { name: "AES-CTR", counter: iv, length: 64 },
            key,
            data
        );

        return decoder.decode(decrypted);
    } catch {
        return null;
    }
}