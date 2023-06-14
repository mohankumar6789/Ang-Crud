import { Directive, Component, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appDestroyListener]'
})

export class DestroyListenerDirective implements OnDestroy {
  ngOnDestroy() {
    console.log("Goodbye World!");
  }
}

@Component({
  selector: 'app-ondestroy',
  templateUrl: './ondestroy.component.html',
  styleUrls: ['./ondestroy.component.scss']
})

export class OndestroyComponent {
  destroy: boolean = true;

  toggleDestroy() {
    this.destroy = !this.destroy;
  }
}
