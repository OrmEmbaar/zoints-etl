import { Connection, PublicKey } from '@solana/web3.js';

export interface ETLParams {
    connection: Connection;
    postgresURL: string;
    stakeProgramId: PublicKey;
    rateLimit?: number;
}
