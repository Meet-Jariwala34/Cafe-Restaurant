import express from 'express';
import { addProduct,removeProduct,editProduct,soldOutProduct, listItems, notSoldOutProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/addItem',adminAuth,upload.single('image'),addProduct);
productRouter.post('/removeItem',adminAuth,removeProduct);
productRouter.put('/editItem',adminAuth,editProduct);
productRouter.put('/soldOutItem',adminAuth,soldOutProduct);
productRouter.put('/notSoldOutItem',adminAuth,notSoldOutProduct);
productRouter.get('/listMenu',listItems);


export default productRouter;