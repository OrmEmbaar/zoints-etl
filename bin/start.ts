#!/usr/bin/node
import config from './config';
import { Connection, PublicKey } from '@solana/web3.js';
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

    etl.on('newSignatures', (type, count) => log.debug(`Found ${count} new ${type} signatures`));
    etl.on('newInstructions', (c) => log.debug(`Saved ${c} new instructions`));
    etl.on('newTransfers', (c) => log.debug(`Saved ${c} new balances`));
    etl.on('warn', (msg) => log.warn(msg));
    etl.on('error', (msg, err) => log.error(msg, err));

    etl.start();
    log.info('Started ETL');
}

main().catch((e) => log.error(`Error starting ETL`, e));
