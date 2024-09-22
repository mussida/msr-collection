import { Component } from '@angular/core';
import { GridStoriesComponent } from '../../components/grid-stories/grid-stories.component';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [GridStoriesComponent],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css',
})
export class StoriesComponent {}
