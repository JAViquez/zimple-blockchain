export function getCrypto(): any | null {
    try {
        return require('crypto');
    } catch (err) {
        console.log('crypto support is disabled!');
        return null
    }
}

export function generateHash(blockId: string, data: any, prevHash: string, nonce: number, crypto: any) : string {
    const string = `${blockId}${data}${prevHash}${nonce}`
    return crypto.createHash("sha256")
                    .update(string)
                    .digest("binary")
}