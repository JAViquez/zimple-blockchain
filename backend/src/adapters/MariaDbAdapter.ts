/** 
 * This class is the "in memory" implementation 
 * of the DbService interface
*/

import { Block } from '../domain/Block'
import { DbPort } from '../ports/DbPort';

const blockchain : Block[] = [];

export class MariaDbAdapter implements DbPort {
    async saveBlock(params: {
        block: Block
    }): Promise<Block> {
       throw new Error('Missing Implementation')
    }

    async getLastBlock(): Promise<Block | null>{
        const lastBlock = blockchain.length > 0 ? blockchain[blockchain.length - 1] : null;
        throw new Error('Missing Implementation')
    }
    
    async getBlockchain(): Promise<Block[]>{
        throw new Error('Missing Implementation')
    }
}