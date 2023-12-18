
import { createHttpTerminator } from 'http-terminator';

import { setupApp } from './config/app';
import dontev from 'dotenv'
dontev.config()
export const app = setupApp();
const port = process.env.PORT;

export const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// terminator
export const httpTerminator = createHttpTerminator({
  server,
});


