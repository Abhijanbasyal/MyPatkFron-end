import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieCategoryComponent } from './admin-movie-category.component';

describe('AdminMovieCategoryComponent', () => {
  let component: AdminMovieCategoryComponent;
  let fixture: ComponentFixture<AdminMovieCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMovieCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMovieCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
