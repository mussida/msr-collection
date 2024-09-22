import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesRoubaComponent } from './stories-rouba.component';

describe('StoriesRoubaComponent', () => {
  let component: StoriesRoubaComponent;
  let fixture: ComponentFixture<StoriesRoubaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoriesRoubaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesRoubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
