import { Router } from 'express';
import { 
    createProduct, 
    getAllProduct, 
    getProduct, 
    updateProduct, 
    deleteProduct,
} from '../controller/productController.js'
import { auth } from '../middleware/authMiddleware.js'
import { isAdmin } from '../middleware/adminMiddlware.js'


const router = Router();


// 

router.post('/', auth, isAdmin, createProduct)
router.get('/', getAllProduct)
router.get('/:id', getProduct)
router.put('/:id', auth, isAdmin, updateProduct)
router.delete('/:id', auth, isAdmin, deleteProduct)


export default router;