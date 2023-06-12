import { Component, DoCheck, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-ngdocheck',
  templateUrl: './app-ngdocheck.component.html',
  styleUrls: ['./app-ngdocheck.component.scss']
})
export class AppNgdocheckComponent implements OnInit {
  lifecycleTicks: number = 0;
  oldTheData!: string;
  data: string[] = ['initial'];

  constructor(private changeDetector: ChangeDetectorRef) {
    this.changeDetector.detach(); // lets the class perform its own change detection

    setTimeout(() => {
      this.oldTheData = 'final'; // intentional error
      this.data.push('intermediate');
    }, 3000);

    setTimeout(() => {
      this.data.push('final');
      this.changeDetector.markForCheck();
    }, 6000);
  }
  ngOnInit(): void {}

  ngDoCheck() {
    console.log(++this.lifecycleTicks);

    if (this.data[this.data.length - 1] !== this.oldTheData) {
      this.changeDetector.detectChanges();
    }
  }
}
