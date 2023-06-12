import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChildOnInitComponent } from './app-child-on-init.component';

describe('AppChildOnInitComponent', () => {
  let component: AppChildOnInitComponent;
  let fixture: ComponentFixture<AppChildOnInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppChildOnInitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppChildOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
