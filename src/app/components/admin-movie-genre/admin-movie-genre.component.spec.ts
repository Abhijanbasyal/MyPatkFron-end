import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieGenreComponent } from './admin-movie-genre.component';

describe('AdminMovieGenreComponent', () => {
  let component: AdminMovieGenreComponent;
  let fixture: ComponentFixture<AdminMovieGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMovieGenreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMovieGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
