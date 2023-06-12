import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-app-child-component',
  templateUrl: './app-child-component.component.html',
  styleUrls: ['./app-child-component.component.scss']
})

export class AppChildComponentComponent implements OnChanges {
  @Input()
  data!: string;
  lifecycleTicks: number = 0;

  ngOnChanges() {
    this.lifecycleTicks++;
  }
}