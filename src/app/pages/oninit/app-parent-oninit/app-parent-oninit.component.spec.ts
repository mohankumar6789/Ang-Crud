import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppParentOninitComponent } from './app-parent-oninit.component';

describe('AppParentOninitComponent', () => {
  let component: AppParentOninitComponent;
  let fixture: ComponentFixture<AppParentOninitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppParentOninitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppParentOninitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
