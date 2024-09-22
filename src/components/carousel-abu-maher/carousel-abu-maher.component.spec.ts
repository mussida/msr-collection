import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAbuMaherComponent } from './carousel-abu-maher.component';

describe('CarouselAbuMaherComponent', () => {
  let component: CarouselAbuMaherComponent;
  let fixture: ComponentFixture<CarouselAbuMaherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselAbuMaherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselAbuMaherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
