import { Connection, PublicKey } from '@solana/web3.js';

export interface ETLParams {
    connection: Connection;
    postgresURL: string;
    stakeProgramId: PublicKey;
    rateLimit?: number;
}

export interface ETLEvents {
    newSignatures: (type: string, count: number) => void;
    newInstructions: (count: number) => void;
    newTransfers: (count: number) => void;
    warn: (message: string) => void;
    error: (message: string, error: Error) => void;
    done: () => void;
}
