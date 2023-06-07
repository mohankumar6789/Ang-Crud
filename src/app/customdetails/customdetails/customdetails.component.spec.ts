import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdetailsComponent } from './customdetails.component';

describe('CustomdetailsComponent', () => {
  let component: CustomdetailsComponent;
  let fixture: ComponentFixture<CustomdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
