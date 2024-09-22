import { Component } from '@angular/core';
import { GridStoriesComponent } from "../../components/grid-stories/grid-stories.component";

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [GridStoriesComponent],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent {

}
