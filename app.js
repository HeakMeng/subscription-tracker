import express from 'express';
import { PORT } from './config/env';

const app = express();

app.get("/", (req, res) => {
  res.send("=> Home-Page <=")
})

app.get("/register", (req, res) => {
  res.send(" => Let's register <=");
})

app.listen(PORT, () => {
  console.log("=> App listening on port",PORT);
})  

export default app;