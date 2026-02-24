import express from 'express';
import { orderAdd, orderList } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';

const orderRouter = express.Router();

orderRouter.post('/orderAdd',orderAdd);
orderRouter.get('/listOrders',adminAuth,orderList);

export default orderRouter;