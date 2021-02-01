/** 
 * This class is the "in memory" implementation 
 * of the DbService interface
*/

import { Block } from '../domain/Block'
import { DbPort } from '../ports/DbPort';

const blockchain : Block[] = [];

export class InMemoryDbAdapter implements DbPort {
    async saveBlock(params: {
        block: Block
    }) {
        blockchain.push(params.block);
        return Promise.resolve(params.block);
    }

    async getLastBlock(): Promise<Block | null>{
        const lastBlock = blockchain.length > 0 ? blockchain[blockchain.length - 1] : null;
        return Promise.resolve(lastBlock);
    }

    async getBlockchain(): Promise<Block[]>{
        return Promise.resolve(blockchain);
    }
}