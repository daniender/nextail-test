import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, Color } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Report } from 'src/app/models/Report';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() _report!: Report;
  @Input() _index: number = 0;

  @Output() markCompletedEvent: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  get reportImg() {
    return `assets/images/${this._report.code}.jpg`;
  }

  reportData(report: Report): ChartData<'bar'> {
    return {
      labels: Object.keys(report.size_stock),
      datasets: [
        {
          data: Object.values<number>(report.size_stock),
          backgroundColor: ['black']
        }
      ]
    };
  }

  markCompleted(code: number) {
    if (confirm('Are you sure you want to mark this product as complete?')) {
      this.markCompletedEvent.emit(code);
    }
  }

  onMouseEnter(event: any): void {
    let element = event.target.querySelector('.completed-overlay');
    element.style.visibility = 'visible';
  }

  onMouseOut(event: any): void {
    let element = event.target.querySelector('.completed-overlay');
    element.style.visibility = 'hidden';
  }

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      y: {
        max: 5 // could set it depending on max value of data
      }
    },
    animation: {
      duration: 0
    }
  };

}
