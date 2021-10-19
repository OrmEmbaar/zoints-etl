import { PrismaClient } from '.prisma/client';
import { EventEmitter } from 'stream';
import { log } from './logger';

import StakeProgramETL from './stakeProgram';
import { ETLParams } from './types';

/**
 * ETL extracts, transforms and loads data into the database from relevant sources.
 */
export class ETL extends EventEmitter {
    private stakeProgramETL: StakeProgramETL;
    private running: boolean = false;
    private shouldStop: boolean = false;
    client: PrismaClient;

    constructor(params: ETLParams) {
        super();
        this.client = new PrismaClient({ datasources: { db: { url: params.postgresURL } } });
        this.stakeProgramETL = new StakeProgramETL(params, this.client);
    }

    private async sync() {
        await this.stakeProgramETL.sync();
    }

    /**
     * Start the ETL.
     */
    async start(): Promise<void> {
        if (this.running) {
            return;
        }
        log.info('ETL started');
        this.running = true;
        while (!this.shouldStop) {
            try {
                await this.sync();
                await sleep(500);
            } catch (err: any) {
                this.emit('error', err);
                await sleep(60000);
            }
        }
        this.running = false;
    }

    /**
     * Stop the ETL.
     */
    async stop(): Promise<void> {
        if (!this.running) {
            return;
        }
        log.info('ETL stopped');
        this.shouldStop = true;
        while (this.running) {
            await sleep(20);
        }
        this.shouldStop = false;
        this.emit('done');
    }
}

async function sleep(ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}
