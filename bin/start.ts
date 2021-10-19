#!/usr/bin/env node
import config from './config';
import { Connection } from '@solana/web3.js';
import { PrismaClient } from '@prisma/client';
import { log } from '../src/logger';
import { ETL } from '../src/etl';

async function main() {
    log.setSettings({
        minLevel: config.log.level,
        type: config.log.silent ? 'hidden' : 'pretty'
    });

    const connection = new Connection(config.solana.url, 'confirmed');
    const prisma = new PrismaClient({ datasources: { db: { url: config.postgresURL } } });
    const etl = new ETL({
        connection,
        prisma,
        stakeProgramId: config.solana.stakeProgramId,
        rateLimit: config.solana.rateLimit
    });
    etl.on('error', (err) => log.error('ETL error', err));
    etl.start();
}

main().catch((e) => log.error(`Error starting ETL`, e));
