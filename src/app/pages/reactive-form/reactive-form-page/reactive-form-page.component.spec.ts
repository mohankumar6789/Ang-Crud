import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormPageComponent } from './reactive-form-page.component';

describe('ReactiveFormPageComponent', () => {
  let component: ReactiveFormPageComponent;
  let fixture: ComponentFixture<ReactiveFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
