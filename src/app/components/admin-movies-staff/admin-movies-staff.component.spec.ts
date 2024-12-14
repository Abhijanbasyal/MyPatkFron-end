import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMoviesStaffComponent } from './admin-movies-staff.component';

describe('AdminMoviesStaffComponent', () => {
  let component: AdminMoviesStaffComponent;
  let fixture: ComponentFixture<AdminMoviesStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMoviesStaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMoviesStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
