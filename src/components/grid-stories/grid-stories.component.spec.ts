import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStoriesComponent } from './grid-stories.component';

describe('GridStoriesComponent', () => {
  let component: GridStoriesComponent;
  let fixture: ComponentFixture<GridStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridStoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
