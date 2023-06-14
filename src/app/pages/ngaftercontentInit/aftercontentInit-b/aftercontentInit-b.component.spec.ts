import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftercontentCheckedBComponent } from './aftercontentInit-b.component';

describe('AftercontentCheckedBComponent', () => {
  let component: AftercontentCheckedBComponent;
  let fixture: ComponentFixture<AftercontentCheckedBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AftercontentCheckedBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AftercontentCheckedBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
