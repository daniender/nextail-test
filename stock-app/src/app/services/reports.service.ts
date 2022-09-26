import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Report } from '../models/Report';
import { SocketService } from './websocket/socket.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  reports: Report[] = [];

  constructor(private _httpClient: HttpClient, private _socketService: SocketService) {
    this._socketService.receive('reports').subscribe(resp => {
      this.reports = resp;
    });
  }

  async getReports() {
    await firstValueFrom(this._httpClient.get<Report[]>(environment.apiUrl.concat('/reports'))
      .pipe(
        map(
          resp => this.reports = resp
        )
      ));
    return this.reports;
  }

  markCompleted(code: number) {
    const payload = {
      code: code
    };
    this._socketService.emit('confirm', payload);
  }
}
