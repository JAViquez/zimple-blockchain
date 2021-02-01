import { DbAdapter } from '../adapters/DbAdapter';
import { Block } from '../models/Block';

export async function addBlock(data: any, dbAdapter: DbAdapter) : Promise<Block>{
  throw new Error('Missing Implementation')
}


function mine( 
  blockId: string, 
  data: any, 
  prevHash: string, 
  nonce: number = 0 ) : Promise<{ hash: string, nonce: number }> {
    
    throw new Error('Missing Implementation')
}