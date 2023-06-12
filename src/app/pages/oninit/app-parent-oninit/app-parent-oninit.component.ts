import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-parent-oninit',
  templateUrl: './app-parent-oninit.component.html',
  styleUrls: ['./app-parent-oninit.component.scss']
})
export class AppParentOninitComponent implements OnInit {
  arbitraryData: string = 'initial';

  constructor() {
    setTimeout(() => {
      this.arbitraryData = 'final';
    }, 5000);
  }
  ngOnInit(): void {}
}
