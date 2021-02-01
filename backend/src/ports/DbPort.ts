import { Block } from '../domain/Block';

export interface DbPort {
    saveBlock: (params: {
        block: Block
    }) => Promise<{ blockId: string }>

    getLastBlock: () => Promise<Block | null>

    getBlockchain: () => Promise<Block[]>
}