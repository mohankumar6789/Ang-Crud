import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAftercontentinitCComponent } from './afterviewInit-c.component';

describe('AppAftercontentinitCComponent', () => {
  let component: AppAftercontentinitCComponent;
  let fixture: ComponentFixture<AppAftercontentinitCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAftercontentinitCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAftercontentinitCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
