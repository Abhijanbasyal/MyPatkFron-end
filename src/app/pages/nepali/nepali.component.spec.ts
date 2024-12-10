import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NepaliComponent } from './nepali.component';

describe('NepaliComponent', () => {
  let component: NepaliComponent;
  let fixture: ComponentFixture<NepaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NepaliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NepaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
