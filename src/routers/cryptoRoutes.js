import {Router} from 'express'
import { getCryptoStats, getPriceDeviation } from '../controllers/crypto.controller.js';

const router = Router()

router.route('/stats').get(getCryptoStats);

router.route('/deviation').get(getPriceDeviation);

export default router;
