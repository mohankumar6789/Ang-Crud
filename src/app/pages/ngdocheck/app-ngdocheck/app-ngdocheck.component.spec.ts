import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNgdocheckComponent } from './app-ngdocheck.component';

describe('AppNgdocheckComponent', () => {
  let component: AppNgdocheckComponent;
  let fixture: ComponentFixture<AppNgdocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNgdocheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNgdocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
