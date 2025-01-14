import process from 'process';
import { isDevelopment } from './backend/utils.js';
import { app } from './backend/app.js';

const port = process.env.PORT || 3000;

if (isDevelopment()) {
  app.listen(port, '127.0.0.1', () => {
    console.log(`Dev server listening on http://localhost:${port}`);
  });
} else {
  app.listen(port, () => {
    console.log(`Production server listening on port ${port}`);
  });
}

process.on('SIGINT', () => {
  console.log('SIGINT');
  process.exit(0);
});
process.on('SIGTERM', () => {
  console.log('SIGTERM');
  process.exit(0);
});
