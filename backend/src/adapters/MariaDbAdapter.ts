/** 
 * This class is the "in memory" implementation 
 * of the DbService interface
*/

import { Block } from '../domain/Block'
import { DbPort } from '../ports/DbPort';

const mariadb = require('mariadb');

function getPool() {
    return mariadb.createPool({
        host: "database", 
        user: "root", 
        password: "",
        database: "blockchaindb"
    });
}

export class MariaDbAdapter implements DbPort {
    async saveBlock(params: {
        block: Block
    }): Promise<Block> {
        const pool = getPool()
        pool.getConnection()
            .then((conn: any) => {
                conn.query("insert into blockchaindb.blocks(blockId, nonce, data, prevHash, hash) values(?, ?, ?, ?, ?)", 
                    [params.block.blockId, params.block.nonce, params.block.data, params.block.prevHash, params.block.hash])
                    .then((rows: any) => {
                    })
                    .then((res: any) => {
                    })
                    .catch((err: any) => {
                        console.log(err)
                    })
            })
        return Promise.resolve(params.block)
    }

    async getLastBlock(): Promise<Block | null>{
        const blockchain: Block[] = await this.getBlockchain()
        const lastBlock = blockchain.length == 0 ? null : blockchain[blockchain.length - 1]
        return Promise.resolve(lastBlock)
    }
    
    async getBlockchain(): Promise<Block[]>{
        let blockchain: Block[] = []
        const pool = getPool()
        pool.getConnection()
            .then((conn: any) => {
                conn.query("select * from blockchaindb.blocks")
                .then((rows: any) => {
                    blockchain = rows.slice(0, rows.length)
                })
                .catch((err: any) => {
                    console.log(err)
                })
            })
        return Promise.resolve(blockchain)
    }
}