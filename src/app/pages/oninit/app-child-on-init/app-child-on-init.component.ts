import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-child-on-init',
  templateUrl: './app-child-on-init.component.html',
  styleUrls: ['./app-child-on-init.component.scss']
})
export class AppChildOnInitComponent implements OnInit {
  @Input()
  data!: string;
  lifecycleTicks: number = 0;

  ngOnInit() {
    this.lifecycleTicks++;
  }
}
