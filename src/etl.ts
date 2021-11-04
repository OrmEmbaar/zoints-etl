import { PrismaClient } from '../client';
import log from './logger';
import StakeProgramETL from './solana/stakeProgram';
import TokenMintETL from './solana/tokenBalances';
import { ETLParams } from './types';

/**
 * ETL extracts, transforms and loads data into the database from relevant data sources.
 */
export class ETL {
    private stakeProgramETL: StakeProgramETL;
    private tokenMintETL: TokenMintETL;
    private running: boolean = false;
    private shouldStop: boolean = false;
    private client: PrismaClient;

    constructor(params: ETLParams) {
        this.client = new PrismaClient({ datasources: { db: { url: params.postgresURL } } });
        this.stakeProgramETL = new StakeProgramETL(params, this.client);
        this.tokenMintETL = new TokenMintETL(params, this.client);
    }

    /**
     * Start the ETL.
     */
    async start(): Promise<void> {
        if (this.running) {
            return;
        }
        this.running = true;
        while (!this.shouldStop) {
            try {
                await this.sync();
                await sleep(500);
            } catch (err: any) {
                log.error(`ETL error: ${err}`);
                await sleep(60000);
            }
        }
        this.running = false;
    }

    /**
     * Stop the ETL.
     */
    // async stop(): Promise<void> {
    //     if (!this.running) {
    //         return;
    //     }
    //     this.shouldStop = true;
    //     while (this.running) {
    //         await sleep(20);
    //     }
    //     this.shouldStop = false;
    // }

    private async sync() {
        await this.stakeProgramETL.sync();
        await this.tokenMintETL.sync();
    }
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
