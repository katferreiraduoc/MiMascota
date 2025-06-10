import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VaccineTrackerPage } from './vaccine-tracker.page';

describe('VaccineTrackerPage', () => {
  let component: VaccineTrackerPage;
  let fixture: ComponentFixture<VaccineTrackerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
