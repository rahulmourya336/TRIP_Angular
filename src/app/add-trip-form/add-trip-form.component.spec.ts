import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTripFormComponent } from './add-trip-form.component';

describe('AddTripFormComponent', () => {
  let component: AddTripFormComponent;
  let fixture: ComponentFixture<AddTripFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTripFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
