import { Router } from "express";
import Main_ctrl from "./controllers/Main_ctrl.js";

const router = Router();

router.get('/', Main_ctrl.home);
router.get('/contact', Main_ctrl.contact);
router.get('/service/:serviceId', Main_ctrl.service);
router.get('/product/:productId', Main_ctrl.product);

export default router;