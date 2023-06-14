import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-app-aftercontentinit-b',
  templateUrl: './afterviewInit-b.component.html',
  styleUrls: ['./afterviewInit-b.component.scss']
})

export class AppAftercontentinitBComponent {
  @ViewChild("BStatement", { read: ElementRef })
  pStmt!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', 'yellow');
  }
}
