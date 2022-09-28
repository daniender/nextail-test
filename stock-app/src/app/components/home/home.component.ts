import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/Report';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _reports: Report[] = [];

  constructor(
    private _reportsService: ReportsService
  ) { }

  ngOnInit(): void {
    this._reportsService.reports$.subscribe(resp => {
      this._reports = resp
    });
    this._reportsService.reloadReports();
  }

  markCompleted(code: number) {
    this._reportsService.markCompleted(code);
  }

}
