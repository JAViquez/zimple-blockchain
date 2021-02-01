import { Block } from '../models/Block';

export interface DbAdapter {
    saveBlock: (params: {
        block: Block
    }) => Promise<{ blockId: string }>

    getLastBlock: () => Promise<Block | null>

    getBlockchain: () => Promise<Block[]>
}