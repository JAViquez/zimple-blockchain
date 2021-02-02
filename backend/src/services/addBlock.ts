import { DbPort } from '../ports/DbPort';
import { Block } from '../domain/Block';
import { getCrypto, createHash } from './encription'
import cuid from 'cuid'

function reachMineRequirements(hash: string): boolean {
  return (hash[0] == "0" && hash[1] == "0") ? true : false
}

function mine( 
  blockId: string, 
  data: any, 
  prevHash: string, 
  nonce: number = 0 ) : Promise<{ hash: string, nonce: number }> {
    let hash: string = ""
    let crypto = getCrypto();
    if(crypto) {
      let string: string = ""
      let continueMining: boolean = true
  
      do {
        string = `${blockId}${data}${prevHash}${nonce}`
        hash = createHash(string, crypto)
        continueMining = !reachMineRequirements(hash)
        if(continueMining) {
          nonce += 1;  
        }
      } while(continueMining)
    }
    return Promise.resolve({
      hash: hash,
      nonce: nonce
    })
}

export async function addBlock(data: any, db: DbPort) : Promise<Block>{
  const blockId: string = cuid()
  const prevBlock = await db.getLastBlock()
  const prevHash = prevBlock ? prevBlock.hash : '0'.repeat(64)
  const miningResult = await mine(blockId, data, prevHash)
  const newBlock: Block = {
    blockId, 
    data,
    prevHash,
    hash: miningResult.hash,
    nonce: miningResult.nonce
  }
  db.saveBlock({block: newBlock})
  return Promise.resolve(newBlock)
}
