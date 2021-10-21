import { PrismaClient } from '.prisma/client';
import { TypedEmitter } from 'tiny-typed-emitter';

import StakeProgramETL from './solana/stakeProgram';
import TokenMintETL from './solana/tokenBalances';
import { ETLParams, ETLEvents } from './types';

/**
 * ETL extracts, transforms and loads data into the database from relevant sources.
 */
export class ETL {
    private stakeProgramETL: StakeProgramETL;
    private tokenMintETL: TokenMintETL;
    private running: boolean = false;
    private shouldStop: boolean = false;
    event: TypedEmitter<ETLEvents>;
    client: PrismaClient;

    constructor(params: ETLParams) {
        this.event = new TypedEmitter<ETLEvents>();
        this.client = new PrismaClient({ datasources: { db: { url: params.postgresURL } } });

        this.stakeProgramETL = new StakeProgramETL(params, this.client, this.event);
        this.tokenMintETL = new TokenMintETL(params, this.client, this.event);
    }

    get on() {
        return this.event.on.bind(this.event);
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
                this.event.emit('error', 'ETL error', err);
                await sleep(60000);
            }
        }
        this.running = false;
        this.event.emit('done');
    }

    /**
     * Stop the ETL.
     */
    async stop(): Promise<void> {
        if (!this.running) {
            return;
        }
        this.shouldStop = true;
        while (this.running) {
            await sleep(20);
        }
        this.shouldStop = false;
    }

    private async sync() {
        await this.stakeProgramETL.sync();
        await this.tokenMintETL.sync();
    }
}

async function sleep(ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}
