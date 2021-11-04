// import config from './config';
import { Connection, PublicKey } from '@solana/web3.js';
import log from '../src/logger';
import { ETL } from '../src/etl';
import { migrate } from './migrate';

export interface IStartOpts {
    solana: {
        url: string;
        rateLimit: number;
        stakeProgramId: string;
    };
    postgresURL: string;
    migrate: boolean;
}

export async function start(config: IStartOpts) {
    try {
        if (config.migrate) {
            await migrate(config.postgresURL);
        }
        const connection = new Connection(config.solana.url, 'confirmed');
        const etl = new ETL({
            connection,
            postgresURL: config.postgresURL,
            stakeProgramId: new PublicKey(config.solana.stakeProgramId),
            rateLimit: config.solana.rateLimit
        });
        etl.start();
        log.info('ETL started');
    } catch (err) {
        log.error(`ETL error: ${err}`);
    }
}
