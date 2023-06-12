import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftercontentCheckedCComponent } from './aftercontent-checked-c.component';

describe('AftercontentCheckedCComponent', () => {
  let component: AftercontentCheckedCComponent;
  let fixture: ComponentFixture<AftercontentCheckedCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AftercontentCheckedCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AftercontentCheckedCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
