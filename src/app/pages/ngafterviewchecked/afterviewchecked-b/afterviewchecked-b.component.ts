import { Component, ViewChild, AfterViewChecked, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-afterviewchecked-b',
  templateUrl: './afterviewchecked-b.component.html',
  styleUrls: ['./afterviewchecked-b.component.scss']
})

export class AfterviewcheckedBComponent implements AfterViewChecked {
  @ViewChild("BStatement", { read: ElementRef })
  pStmt!: ElementRef;

  constructor(private renderer: Renderer2) { }

  randomRGB(): string {
    return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
  }

  ngAfterViewChecked() {
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', this.randomRGB());
  }
}
