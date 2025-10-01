import { Encrypter } from '@/domain/forum/cryptography/encrypter';
import { HashComparer } from '@/domain/forum/cryptography/hash-compare';
import { HashGenerator } from '@/domain/forum/cryptography/hash-generator';
import { Module } from '@nestjs/common';
import { BcryptHasher } from './bcrypt-hasher';
import { JwtEncrypter } from './jwt-encrypter';

@Module({
  providers: [
    { provide: Encrypter, useClass: JwtEncrypter },
    { provide: HashComparer, useClass: BcryptHasher },
    { provide: HashGenerator, useClass: BcryptHasher },
  ],
  exports: [Encrypter, HashComparer, HashGenerator],
})
export class CryptographyModule {}
