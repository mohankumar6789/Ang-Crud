import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChildComponentComponent } from './app-child-component.component';

describe('AppChildComponentComponent', () => {
  let component: AppChildComponentComponent;
  let fixture: ComponentFixture<AppChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppChildComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
