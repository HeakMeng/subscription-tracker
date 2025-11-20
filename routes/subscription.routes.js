import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/upcoming', (req,res) => res.send({title: 'Upcoming subscritipion!'}));
subscriptionRouter.get('/', (req,res) => res.send({title: 'GET all subscritipion!'}));
subscriptionRouter.get('/:id', (req,res) => res.send({title: 'GET subscritipion details!'}));
subscriptionRouter.post('/', (req,res) => res.send({title: 'Create subscritipion!'}));
subscriptionRouter.put('/:id', (req,res) => res.send({title: 'Update subscritipion!'}));
subscriptionRouter.delete('/:id', (req,res) => res.send({title: 'Delete subscritipion!'}));
subscriptionRouter.get('/user/:id', (req,res) => res.send({title: 'GET all user subscritipion!'}));
subscriptionRouter.put('/:id/cancel', (req,res) => res.send({title: 'Cancel subscritipion!'}));

export default subscriptionRouter;