#!/usr/bin/env node
import { Command, Option } from 'commander';
import { migrate } from './migrate';
import { start } from './start';
import log from '../src/logger';

const program = new Command();

program
    .description('A command line program for creating and managing the Zoints ETL.')
    .option('--pg-user <string>', 'postgres user', 'postgres')
    .option('--pg-host <string>', 'postgres host', 'localhost')
    .option('--pg-port <number>', 'postgres port', '5432')
    .option('--pg-database <string>', 'postgres database', 'zoints-etl')
    .addOption(
        new Option('--pg-password <string>', 'postgres password')
            .env('PG_PASSWORD')
            .makeOptionMandatory()
    );

program
    .command('start')
    .description('Start the ETL')
    .option('-d, --debug', 'include debug logs', false)
    .option('-m, --migrate', 'migrate the database before starting', false)
    .option('-r, --rate-limit <number>', 'min time between solana RPC API requests (ms)', '250')
    .addOption(
        new Option('--solana-url <string>', 'the url of the solana RPC API')
            .env('SOLANA_URL')
            .makeOptionMandatory()
    )
    .addOption(
        new Option('--staking-pid <string>', 'the solana staking program ID')
            .env('STAKING_PROGRAM_ID')
            .makeOptionMandatory()
    )
    .action(({ migrate, solanaUrl, stakingPid, rateLimit, debug }) => {
        log.level = debug ? 'debug' : 'info';
        return start({
            solana: {
                url: solanaUrl,
                stakeProgramId: stakingPid,
                rateLimit: parseInt(rateLimit)
            },
            postgresURL: getPgURL(),
            migrate
        });
    });

program
    .command('migrate')
    .description('migrate the database schema')
    .action(() => {
        const pgURL = getPgURL();
        return migrate(pgURL);
    });

program.parse(process.argv);

function getPgURL() {
    const { pgUser, pgPassword, pgHost, pgPort, pgDatabase } = program.opts();
    return `postgresql://${pgUser}:${pgPassword}@${pgHost}:${pgPort}/${pgDatabase}`;
}
