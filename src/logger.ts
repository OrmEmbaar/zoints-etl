import { Logger } from 'tslog';

// Logger is visible only when manually overridden.
export const log: Logger = new Logger({ type: 'hidden' });
