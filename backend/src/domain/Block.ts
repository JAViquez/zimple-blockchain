export interface Block {
    blockId: string
    nonce: number
    data: any
    prevHash: string
    hash: string
}