import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterviewcheckedAComponent } from './afterviewchecked-a.component';

describe('AfterviewcheckedAComponent', () => {
  let component: AfterviewcheckedAComponent;
  let fixture: ComponentFixture<AfterviewcheckedAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterviewcheckedAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterviewcheckedAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
