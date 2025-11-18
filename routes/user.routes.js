import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req,res) => res.send({title: "GET all users"}));
userRouter.get('/:id', (req,res) => res.send({title: "GET specific user!"}));
userRouter.post('/', (req,res) => res.send({title: "CREATE new user"}));
userRouter.get('/:id', (req,res) => res.send({title: "UPDATE all users"}));
userRouter.delete('/:id', (req,res) => res.send({title: "DELETE user"}));

export default userRouter;