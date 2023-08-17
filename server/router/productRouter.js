import { Router } from 'express';
import { 
    createProduct, 
    getAllProduct, 
    getProduct, 
    updateProduct, 
    deleteProduct,
} from '../controller/productController.js'
import { auth } from '../middleware/authMiddleware.js'


const router = Router();


// 

router.post('/', auth, createProduct)
router.get('/', getAllProduct)
router.get('/:id', getProduct)
router.put('/:id', auth, updateProduct)
router.delete('/:id', auth, deleteProduct)


export default router;