import { Router } from 'express';
import { registerUser, loginUser } from '../controller/authController.js'
import { auth, isAdmin } from '../middleware/authMiddleware.js';
// import { isAdmin } from '../middleware/adminMiddlware.js';

const router = Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
//protected User route auth
router.get("/user-auth", auth, (req, res) => {
    res.status(200).send({ ok: true });
});
  //protected Admin route auth
router.get("/admin-auth", auth, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

export default router;