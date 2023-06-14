import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftercontentCheckedCComponent } from './aftercontentInit-c.component';

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
