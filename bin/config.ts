import { PublicKey } from '@solana/web3.js';
import { TLogLevelName } from 'tslog';

export interface Config {
    solana: {
        url: string;
        rateLimit: number;
    };
    stakeProgramId: PublicKey;
    DBURL: string;
    log: {
        level: TLogLevelName;
        silent: boolean;
    };
}

function getEnvVar<T>(key: string, parse: (envVar: string) => T, def?: T) {
    try {
        const envVar = process.env[key];
        if (!envVar) {
            if (def !== undefined) {
                return def;
            }
            throw new Error(`environment variable not set`);
        }
        const p = parse(envVar);
        return p;
    } catch (err) {
        console.error(`Failed to get ${key}`, err);
        process.exit(1);
    }
}

function parseStringVar(envVar: string) {
    return envVar;
}

function parseKeyVar(envVar: string) {
    return new PublicKey(envVar);
}

function parseLogLevelName(envVar: string): TLogLevelName {
    switch (envVar) {
        case 'fatal':
        case 'error':
        case 'warn':
        case 'info':
        case 'debug':
        case 'trace':
        case 'silly':
            return envVar;
        default:
            throw new Error(`uknown log level: ${envVar}`);
    }
}

function parseBool(envVar: string): boolean {
    switch (envVar) {
        case 'TRUE':
        case 'True':
        case 'true':
            return true;
        case 'FALSE':
        case 'False':
        case 'false':
            return false;
        default:
            throw new Error(`unable to parse ${envVar} as bool`);
    }
}

function loadAppConfig(): Config {
    const user = getEnvVar('DB_USER', parseStringVar, 'postgres');
    const password = getEnvVar('DB_PASSWORD', parseStringVar);
    const host = getEnvVar('DB_HOST', parseStringVar, 'localhost');
    const port = getEnvVar('DB_PORT', parseStringVar, '5432');
    const name = getEnvVar('DB_NAME', parseStringVar, 'zee-etl');

    return {
        solana: {
            url: getEnvVar('SOLANA_URL', parseStringVar),
            rateLimit: getEnvVar('SOLANA_RATE_LIMIT', parseInt)
        },
        log: {
            level: getEnvVar('LOG_LVL', parseLogLevelName, 'info'),
            silent: getEnvVar('LOG_SILENT', parseBool, false)
        },
        stakeProgramId: getEnvVar('STAKING_PROGRAM_ID', parseKeyVar),
        DBURL: `postgresql://${user}:${password}@${host}:${port}/${name}`
    };
}

export default loadAppConfig();
