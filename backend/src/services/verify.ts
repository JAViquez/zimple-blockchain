import { DbPort } from '../ports/DbPort';
import { Block } from '../domain/Block'
import { generateHash, getCrypto } from '../services/encription'

function verifyHash(block: Block): boolean {
  const crypto = getCrypto();
  const hash = generateHash(block.blockId, block.data, block.prevHash, block.nonce, crypto)
  if(hash != block.hash) {
    return false
  }
  return true
}

function verifyBlockPosition(actualBlock: Block, prevBlock: Block): boolean {
  return actualBlock.prevHash == prevBlock.hash
}


export async function verify(db: DbPort) : Promise<{
  isValid: boolean
}>{
  const blockchain: Block[] = await db.getBlockchain()
  for(let i: number = 0; i < blockchain.length; ++i) {
    let validBlock: boolean = verifyHash(blockchain[i])
    if(i > 0) {
      validBlock &&= verifyBlockPosition(blockchain[i], blockchain[i-1])
    }
    if(!validBlock) {
      Promise.resolve({isValid: false})
    }
  }
  return Promise.resolve({isValid: true})
}

