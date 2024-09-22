import { Component } from '@angular/core';
import { CarouselAbuMaherComponent } from '../carousel-abu-maher/carousel-abu-maher.component';
import { MapAbuMaherComponent } from '../map-abu-maher/map-abu-maher.component';

@Component({
  selector: 'app-stories-abu-maher',
  standalone: true,
  imports: [CarouselAbuMaherComponent, MapAbuMaherComponent],
  templateUrl: './stories-abu-maher.component.html',
  styleUrl: './stories-abu-maher.component.css',
})
export class StoriesAbuMaherComponent {}
