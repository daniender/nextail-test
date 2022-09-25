import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Report } from '../models/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Report[]> {
    return this._httpClient.get<Report[]>(environment.apiUrl.concat('/reports'));
  }
}
