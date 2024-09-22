import { Component, ViewChild } from '@angular/core';
import { NgxSplideComponent, NgxSplideModule } from 'ngx-splide';

@Component({
  selector: 'app-carousel-abu-maher',
  standalone: true,
  imports: [NgxSplideModule],
  templateUrl: './carousel-abu-maher.component.html',
  styleUrl: './carousel-abu-maher.component.css',
})
export class CarouselAbuMaherComponent {
  @ViewChild('mainSplide') horizontalThumbnailSplide:
    | NgxSplideComponent
    | undefined;
}
