import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftercontentCheckedAComponent } from './aftercontent-checked-a.component';

describe('AftercontentCheckedAComponent', () => {
  let component: AftercontentCheckedAComponent;
  let fixture: ComponentFixture<AftercontentCheckedAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AftercontentCheckedAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AftercontentCheckedAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
