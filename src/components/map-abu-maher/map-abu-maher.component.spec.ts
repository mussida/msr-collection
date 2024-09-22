import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAbuMaherComponent } from './map-abu-maher.component';

describe('MapAbuMaherComponent', () => {
  let component: MapAbuMaherComponent;
  let fixture: ComponentFixture<MapAbuMaherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapAbuMaherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapAbuMaherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
