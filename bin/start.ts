#!/usr/bin/node
import config from './config';
import { Connection } from '@solana/web3.js';
import { log } from '../src/logger';
import { ETL } from '../src/etl';

async function main() {
    log.setSettings({
        minLevel: config.log.level,
        type: config.log.silent ? 'hidden' : 'pretty'
    });

    const connection = new Connection(config.solana.url, 'confirmed');
    const etl = new ETL({
        connection,
        postgresURL: config.postgresURL,
        stakeProgramId: config.solana.stakeProgramId,
        rateLimit: config.solana.rateLimit
    });
    etl.on('error', (err) => log.error('ETL error', err));
    etl.start();
}

main().catch((e) => log.error(`Error starting ETL`, e));
