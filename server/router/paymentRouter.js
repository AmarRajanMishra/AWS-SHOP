import { Router } from 'express';
import { braintreeTokenController, braintreePaymentController } from '../controller/paymentController.js';
import { auth } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/braintree-token', auth, braintreeTokenController)

router.post('/braintree-payment',auth, braintreePaymentController)

export default router;