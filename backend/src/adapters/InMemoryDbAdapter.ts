/** 
 * This class is the "in memory" implementation 
 * of the DbService interface
*/

import { Block } from '../domain/Block'
import { DbPort } from '../ports/DbPort';

const blockchain : Block[] = [];

export class InMemoryDbAdapter implements DbPort {
    saveBlock(params: {
        block: Block
    }) {
        blockchain.push(params.block);
        return Promise.resolve({ blockId: params.block.blockId });
    }

    getLastBlock(){
        const lastBlock = blockchain.length > 0 ? blockchain[blockchain.length - 1] : null;
        return Promise.resolve(lastBlock);
    }

    getBlockchain(){
        return Promise.resolve(blockchain);
    }
}