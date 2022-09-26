import express from 'express';
import socketIO from 'socket.io';
import http from 'http';

import { SERVER_PORT } from '../../global/environmnent';
import { ReportService } from '../../services/report.service';


export default class Server {

    private static _instance: Server;

    public app: express.Application;
    public port: number;
    public io: socketIO.Server;
    private httpServer: http.Server;

    private reportService: ReportService

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = new socketIO.Server(this.httpServer, {
            cors: {
                origin: true,
                credentials: true
            }
        });
        this.reportService = new ReportService();
        this.listenSockets();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    start(callback: any) {
        this.httpServer.listen(this.port, callback);
    }

    private listenSockets() {
        console.log('Listening to socket connections');
        this.io.on('connection', client => {
            console.log('Client connected', client.id);
        });

        this.io.on('confirm', (payload: { code: number }) => {
            console.log('Report confirmed', payload.code);
            this.reportService.markConfirmed(payload.code);
            this.io.emit('reports', this.reportService.reports);
        });
    }
}