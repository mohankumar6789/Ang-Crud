import { Component, ContentChild, AfterContentInit, ElementRef, Renderer2, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-aftercontent-checked-b',
  templateUrl: './aftercontentInit-b.component.html',
  styleUrls: ['./aftercontentInit-b.component.scss']
})

export class AftercontentCheckedBComponent implements AfterContentChecked {
  @ContentChild("BHeader", { read: ElementRef })
  hRef!: ElementRef;
  @ContentChild(Component, { read: ElementRef })
  cRef!: ElementRef;

  constructor(private renderer: Renderer2) { }
  ngAfterContentChecked(): void {}


  ngAfterContentInit() {
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', 'yellow')

    this.renderer.setStyle(this.cRef.nativeElement.children.item(0), 'background-color', 'pink');
    this.renderer.setStyle(this.cRef.nativeElement.children.item(1), 'background-color', 'red');
  }
}

function ngAfterContentChecked() {}
function randomRGB() {}

