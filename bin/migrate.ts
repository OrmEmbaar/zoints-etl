#!/usr/bin/node
import config from './config';
import { exec } from 'child_process';

// The Prisma CLI reads the POSTGRES_URL environment variable
process.env.POSTGRES_URL = config.postgresURL;

exec(`npx prisma migrate deploy`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
