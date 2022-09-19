import { Router, Request, Response } from 'express';

const router = Router();

router.get('/reports', (req: Request, resp: Response) => {
    resp.json({
        ok: true,
        message: 'OK'
    });
});

export default router;