import { DbPort } from '../ports/DbPort';
import { Block } from '../domain/Block';
import { getCrypto, createHash } from './encription'

export async function addBlock(data: any, db: DbPort) : Promise<Block>{
  throw new Error('Missing Implementation')
}

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