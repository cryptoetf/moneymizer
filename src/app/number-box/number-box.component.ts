import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-box',
  templateUrl: './number-box.component.html',
  styleUrls: ['./number-box.component.css']
})
export class NumberBoxComponent {
  constructor() {
    this.number = 0; // Set a default value (can be any number)
  }
  @Input() number: number;

  getColor(): string {
    if (this.number > 0) {
      return 'blue';
    } else {
      return 'red';
    }
  }
}