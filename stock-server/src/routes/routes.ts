import { Router, Request, Response } from 'express';
import { ReportService } from '../services/report.service';

/** API controller to expose rest endpoints */
const service = ReportService.instance;
const router = Router();

router.get('/reload', (req: Request, resp: Response) => {
    return resp.json(service.reload());
});

export default router;