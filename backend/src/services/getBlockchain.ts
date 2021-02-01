import { DbPort } from '../ports/DbPort';
import { Block } from '../domain/Block';

export async function getBlockchain( db: DbPort) : Promise<Block[]>{
  return db.getBlockchain();
}