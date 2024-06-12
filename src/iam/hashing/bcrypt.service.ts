//  BCrypt Service
import { Injectable } from '@nestjs/common';
import { HashingService } from './hashing.service';
import { genSalt, hash, compare } from 'bcrypt';

@Injectable()
export class BcryptService implements HashingService {
  async hash(data: string | Buffer): Promise<string> {
    const salt = await genSalt();
    console.log('data ',data)
    return hash(data, salt);
  }

  compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    return compare(data, encrypted);
  }
}