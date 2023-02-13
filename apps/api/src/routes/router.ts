import { Router } from 'express';
import authRouter from './auth/auth.router';
import monitoringRouter from './monitoring/monitoring.router';

const router = Router();

router.use('/auth', authRouter);
router.use('/monitor', monitoringRouter);

export default router;
