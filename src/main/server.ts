
import { createHttpTerminator } from 'http-terminator';
import { logger } from '../shared/utils/logger';
import { setupApp } from './config/app';

const port = 3010
export const app = setupApp();

export const server = app.listen(port, () => {
  logger.info(`Server running at: http://localhost:${port}`);
});

// terminator
export const httpTerminator = createHttpTerminator({
  server,
});


