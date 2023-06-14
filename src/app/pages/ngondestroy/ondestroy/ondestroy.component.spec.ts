import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndestroyComponent } from './ondestroy.component';

describe('OndestroyComponent', () => {
  let component: OndestroyComponent;
  let fixture: ComponentFixture<OndestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OndestroyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OndestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
