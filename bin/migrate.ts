import util from 'util';
import child from 'child_process';
import log from '../src/logger';

const exec = util.promisify(child.exec);

export async function migrate(postgresURL: string) {
    // The Prisma CLI expects the POSTGRES_URL env var.
    process.env.POSTGRES_URL = postgresURL;

    const { stdout, stderr } = await exec('npx prisma migrate deploy');
    if (stderr) {
        log.error(stderr);
    }
    if (stdout) {
        log.info(stdout);
    }
}
