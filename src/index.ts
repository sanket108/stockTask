import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import validateEnv from '@/utils/validateEnv';
import router from '@/routers/routes';

// App Variables

dotenv.config();

validateEnv();

const port = process.env.PORT;

// App Configuration

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes

app.use('/', router);

// Server Activation

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
