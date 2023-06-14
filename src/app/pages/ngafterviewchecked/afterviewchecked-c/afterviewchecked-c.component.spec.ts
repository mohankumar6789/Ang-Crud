import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterviewcheckedCComponent } from './afterviewchecked-c.component';

describe('AfterviewcheckedCComponent', () => {
  let component: AfterviewcheckedCComponent;
  let fixture: ComponentFixture<AfterviewcheckedCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterviewcheckedCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterviewcheckedCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
