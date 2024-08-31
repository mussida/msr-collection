import { Component } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';

@Component({
  selector: 'app-main-image',
  standalone: true,
  imports: [NgxSplideModule],
  templateUrl: './main-image.component.html',
  styleUrl: './main-image.component.css',
})
export class MainImageComponent {}
