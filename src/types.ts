import { Connection, PublicKey } from '@solana/web3.js';
import { PrismaClient } from '.prisma/client';

export interface ETLParams {
    connection: Connection;
    prisma: PrismaClient;
    stakeProgramId: PublicKey;
    rateLimit?: number;
}
