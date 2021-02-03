export function getCrypto(): any | null {
    try {
        return require('crypto');
    } catch (err) {
        console.log('crypto support is disabled!');
        return null
    }
}

export function createHash(string: string, crypto: any) : string {
    return crypto.createHash("sha256")
                    .update(string)
                    .digest("hex")
}