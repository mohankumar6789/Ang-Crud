import { Component } from '@angular/core';

@Component({
  selector: 'app-app-aftercontentinit-b',
  templateUrl: './app-aftercontentinit-b.component.html',
  styleUrls: ['./app-aftercontentinit-b.component.scss']
})

export class AppAftercontentinitBComponent {
  @ViewChild("BStatement", { read: ElementRef }) pStmt: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', 'yellow');
  }
}
