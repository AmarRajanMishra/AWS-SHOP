import { Router } from 'express';
import { auth, isAdmin } from '../middleware/authMiddleware.js';
import { getAllOrderDetails, getOrderDetails, orderStatusController } from '../controller/orderController.js';


const router = Router();


router.get('/order-details', auth, getOrderDetails)
router.get('/order-all-details', auth, isAdmin, getAllOrderDetails)
router.put('/order-status/:orderId',auth, isAdmin, orderStatusController)


export default router;