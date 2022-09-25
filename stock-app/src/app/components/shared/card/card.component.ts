
import { Component, OnInit, Input } from '@angular/core';
import { Report } from 'src/app/models/Report';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() _report!: Report;
  @Input() _index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  get reportImg() {
    return `assets/images/${this._report.code}.jpg`;
  }

}
