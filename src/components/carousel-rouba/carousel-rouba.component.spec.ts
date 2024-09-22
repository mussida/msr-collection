import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselRoubaComponent } from './carousel-rouba.component';

describe('CarouselRoubaComponent', () => {
  let component: CarouselRoubaComponent;
  let fixture: ComponentFixture<CarouselRoubaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselRoubaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselRoubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
