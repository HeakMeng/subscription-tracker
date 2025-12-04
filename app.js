import express from 'express';
import cookieParser from 'cookie-parser';

import { PORT } from './config/env.js';
import authRouter  from './routes/auth.routes.js';
import userRouter  from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errrorMiddleware from './middleware/error.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.use(errrorMiddleware);

app.listen(PORT, async () => {
  console.log(`=> App listening on port",${PORT}👊`);

  await connectToDatabase();
})  

export default app;