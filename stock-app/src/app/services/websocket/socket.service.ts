import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { Observable } from "rxjs";
import { Report } from "src/app/models/Report";

@Injectable({
    providedIn: 'root'
})
export class SocketService {

    constructor(private socket: Socket) {
        this.checkStatus();
    }

    checkStatus(): void {
        this.socket.on('connect', () => {
            console.log('Connected to server');
        });

        this.socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });
    }

    emit(event: string, payload?: any, callback?: Function): void {
        console.log('Report complete message sent');
        this.socket.emit(event, payload, callback);
    }

    receive(event: string): Observable<Report[]> {
        return this.socket.fromEvent(event);
    }
}