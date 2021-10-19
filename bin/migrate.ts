#!/usr/bin/env node
import config from './config';
import { exec } from 'child_process';

process.env.POSTGRES_URL = config.postgresURL;

exec(`echo 'y' | npx prisma migrate deploy`, (error, stdout, stderr) => {
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
