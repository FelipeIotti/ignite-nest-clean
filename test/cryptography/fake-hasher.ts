/* eslint-disable @typescript-eslint/require-await */
import { HashComparer } from '@/domain/forum/cryptography/hash-compare';
import { HashGenerator } from '@/domain/forum/cryptography/hash-generator';

export class FakeHasher implements HashGenerator, HashComparer {
  async hash(plain: string): Promise<string> {
    return plain.concat('-hashed');
  }

  async compare(plain: string, hash: string): Promise<boolean> {
    return plain.concat('-hashed') === hash;
  }
}
