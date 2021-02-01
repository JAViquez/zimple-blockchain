import { DbPort } from '../ports/DbPort';
import { Block } from '../domain/Block';

export async function addBlock(data: any, db: DbPort) : Promise<Block>{
  throw new Error('Missing Implementation')
}


function mine( 
  blockId: string, 
  data: any, 
  prevHash: string, 
  nonce: number = 0 ) : Promise<{ hash: string, nonce: number }> {
    
    throw new Error('Missing Implementation')
}