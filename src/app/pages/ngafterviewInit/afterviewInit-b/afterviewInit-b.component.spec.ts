import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAftercontentinitBComponent } from './afterviewInit-b.component';

describe('AppAftercontentinitBComponent', () => {
  let component: AppAftercontentinitBComponent;
  let fixture: ComponentFixture<AppAftercontentinitBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAftercontentinitBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAftercontentinitBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
