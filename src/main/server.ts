
import { createHttpTerminator } from 'http-terminator';
import { logger } from '../shared/utils/logger';
import { setupApp } from './config/app';

export const app = setupApp();
const port = process.env.PORT;
export const server = app.listen(port, () => {
  logger.info(`Server running at: http://localhost:${port}`);
});

// terminator
export const httpTerminator = createHttpTerminator({
  server,
});


