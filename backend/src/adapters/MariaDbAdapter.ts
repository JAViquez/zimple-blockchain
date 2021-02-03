/** 
 * This class is the "in memory" implementation 
 * of the DbService interface
*/

import { Block } from '../domain/Block'
import { DbPort } from '../ports/DbPort';

const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: "database", 
    user: "root", 
    password: "",
    database: "blockchaindb"
});

export class MariaDbAdapter implements DbPort {
    async saveBlock(params: {
        block: Block
    }): Promise<Block> {
        const conn = await pool.getConnection()
        await conn.query("insert into blockchaindb.blocks(blockId, nonce, data, prevHash, hash) values(?, ?, ?, ?, ?)", 
            [params.block.blockId, params.block.nonce, params.block.data, params.block.prevHash, params.block.hash])
        conn.close()
        return Promise.resolve(params.block)
    }

    async getLastBlock(): Promise<Block | null>{
        const blockchain: Block[] = await this.getBlockchain()
        const lastBlock = blockchain.length == 0 ? null : blockchain[blockchain.length - 1]
        return Promise.resolve(lastBlock)
    }
    
    async getBlockchain(): Promise<Block[]>{
        let blockchain: Block[] = []
        const conn = await pool.getConnection()
        const rows = await conn.query("select * from blockchaindb.blocks")
        blockchain = rows.slice(0, rows.length)
        conn.close()
        return Promise.resolve(blockchain)
    }
}