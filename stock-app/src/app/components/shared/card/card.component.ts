import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  get reportImg() {
    return `assets/images/${this._report.code}.jpg`;
  }

  markCompleted(code: number) {
    this.markCompletedEvent.emit(code);
  }

  onMouseEnter(event: any): void {
    let element = event.target.querySelector('.completed-overlay');
    element.style.visibility = 'visible';
  }

  onMouseOut(event: any): void {
    let element = event.target.querySelector('.completed-overlay');
    element.style.visibility = 'hidden';
  }
}
