import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAftercontentinitComponent } from './afterviewInit-a.component';

describe('AppAftercontentinitComponent', () => {
  let component: AppAftercontentinitComponent;
  let fixture: ComponentFixture<AppAftercontentinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAftercontentinitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAftercontentinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
