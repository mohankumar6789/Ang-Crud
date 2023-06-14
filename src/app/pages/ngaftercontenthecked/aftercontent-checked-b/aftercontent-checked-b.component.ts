import { AfterContentChecked, Component, ContentChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-aftercontent-checked-b',
  templateUrl: './aftercontent-checked-b.component.html',
  styleUrls: ['./aftercontent-checked-b.component.scss']
})

export class AftercontentCheckedBComponent implements AfterContentChecked {
  @ContentChild("BHeader", { read: ElementRef })
  hRef!: ElementRef;
  @ContentChild(Component, { read: ElementRef })
  cRef!: ElementRef;

  constructor(private renderer: Renderer2) { }

  randomRGB(): string {
    return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
  }

  ngAfterContentChecked() {
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', this.randomRGB());
    this.renderer.setStyle(this.cRef.nativeElement.children.item(0), 'background-color', this.randomRGB());
    this.renderer.setStyle(this.cRef.nativeElement.children.item(1), 'background-color', this.randomRGB());
  }
}
