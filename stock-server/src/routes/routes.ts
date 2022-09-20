import { Router, Request, Response } from 'express';
import { ReportService } from '../services/report.service';


const service = new ReportService();
const router = Router();

router.get('/reports', (req: Request, resp: Response) => {
    service.getReports().then(response => {
        return resp.json(response);
    });
});

export default router;