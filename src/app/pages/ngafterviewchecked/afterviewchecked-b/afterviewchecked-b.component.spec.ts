import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterviewcheckedBComponent } from './afterviewchecked-b.component';

describe('AfterviewcheckedBComponent', () => {
  let component: AfterviewcheckedBComponent;
  let fixture: ComponentFixture<AfterviewcheckedBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterviewcheckedBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterviewcheckedBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
