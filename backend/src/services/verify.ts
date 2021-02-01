import { DbPort } from '../ports/DbPort';

export async function verify(db: DbPort) : Promise<{
  isValid: boolean
}>{
  throw new Error('Missing Implementation')
}

