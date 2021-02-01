import { DbAdapter } from '../adapters/DbAdapter';
import { Block } from '../models/Block';

export async function getBlockchain( dbAdapter: DbAdapter) : Promise<Block[]>{
  return dbAdapter.getBlockchain();
}