import express from 'express';

import { PORT } from './config/env.js';
import authRouter  from './routes/auth.routes.js';
import userRouter  from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

const app = express();

app.use('/', authRouter);
app.use('/', userRouter);
app.use('/', subscriptionRouter);

app.listen(PORT, () => {
  console.log(`=> App listening on port",${PORT}👊`);
})  

export default app;