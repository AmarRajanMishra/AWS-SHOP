import { Router } from 'express';
import { 
    createProduct, 
    getAllProduct, 
    getProduct, 
    updateProduct, 
    deleteProduct,
} from '../controller/productController.js'


const router = Router();


// 

router.post('/', createProduct)
router.get('/', getAllProduct)
router.get('/:id', getProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


export default router;