import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripManagePanelComponent } from './trip-manage-panel.component';

describe('TripManagePanelComponent', () => {
  let component: TripManagePanelComponent;
  let fixture: ComponentFixture<TripManagePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripManagePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripManagePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
