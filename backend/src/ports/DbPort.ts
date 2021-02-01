import { Block } from '../domain/Block';

export interface DbPort {
    saveBlock: (params: {
        block: Block
    }) => Promise<Block>

    getLastBlock: () => Promise<Block | null>

    getBlockchain: () => Promise<Block[]>
}