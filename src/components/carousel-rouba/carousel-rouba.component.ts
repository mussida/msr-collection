import { Component, ViewChild } from '@angular/core';
import { NgxSplideComponent, NgxSplideModule } from 'ngx-splide';
@Component({
  selector: 'app-carousel-rouba',
  standalone: true,
  imports: [NgxSplideModule],
  templateUrl: './carousel-rouba.component.html',
  styleUrl: './carousel-rouba.component.css',
})
export class CarouselRoubaComponent {
  @ViewChild('mainSplide') horizontalThumbnailSplide:
    | NgxSplideComponent
    | undefined;
}
