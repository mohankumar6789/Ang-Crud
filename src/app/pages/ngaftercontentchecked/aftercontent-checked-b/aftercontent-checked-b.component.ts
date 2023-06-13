import { Component, ContentChild, AfterContentInit, ElementRef, Renderer2 } from '@angular/core';
import { AftercontentCheckedCComponent } from '../aftercontent-checked-c/aftercontent-checked-c.component';

@Component({
  selector: 'app-aftercontent-checked-b',
  templateUrl: './aftercontent-checked-b.component.html',
  styleUrls: ['./aftercontent-checked-b.component.scss']
})

export class AftercontentCheckedBComponent AfterContentInit {
  @ContentChild("BHeader", { read: ElementRef }) hRef: ElementRef;
  @ContentChild(AftercontentCheckedCComponent, { read: ElementRef }) cRef: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterContentInit() {
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', 'yellow')

    this.renderer.setStyle(this.cRef.nativeElement.children.item(0), 'background-color', 'pink');
    this.renderer.setStyle(this.cRef.nativeElement.children.item(1), 'background-color', 'red');
  }
}

