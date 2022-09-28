import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable, of, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Report } from '../models/Report';
import { SocketService } from './websocket/socket.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  reports$: Subject<Report[]> = new Subject();

  constructor(
    private _httpClient: HttpClient,
    private _socketService: SocketService
  ) {
    this._socketService.receive('reports').subscribe(resp => {
      this.reports$.next(resp);
    });
  }

  reloadReports(): void {
    this._httpClient.get<Report[]>(environment.apiUrl.concat('/reload'))
      .subscribe(resp => this.reports$.next(resp));
  }

  markCompleted(code: number): void {
    const payload = {
      code: code
    };
    this._socketService.emit('confirm', payload);
  }
}
