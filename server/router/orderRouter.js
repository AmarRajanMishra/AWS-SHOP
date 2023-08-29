import { Router } from 'express';
import { auth, isAdmin } from '../middleware/authMiddleware';


const router = Router();


router.get('/order-details', auth, getOrderDetails)
router.get('/order-all-details', auth, isAdmin, getAllOrderDetails)
router.put('/order-status',auth, isAdmin, orderStatusController)


export default router;