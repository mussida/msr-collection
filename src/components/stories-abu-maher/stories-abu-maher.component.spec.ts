import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesAbuMaherComponent } from './stories-abu-maher.component';

describe('StoriesAbuMaherComponent', () => {
  let component: StoriesAbuMaherComponent;
  let fixture: ComponentFixture<StoriesAbuMaherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoriesAbuMaherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesAbuMaherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
