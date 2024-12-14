import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieCharacterComponent } from './admin-movie-character.component';

describe('AdminMovieCharacterComponent', () => {
  let component: AdminMovieCharacterComponent;
  let fixture: ComponentFixture<AdminMovieCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMovieCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMovieCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
