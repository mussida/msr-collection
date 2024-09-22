import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-abu-maher',
  standalone: true,
  imports: [],
  templateUrl: './map-abu-maher.component.html',
  styleUrl: './map-abu-maher.component.css',
})
export class MapAbuMaherComponent {
  map: mapboxgl.Map | undefined;
  // style = 'mapbox://styles/mussida/clu89999600f901piddnefcl6/draft';
  style = 'mapbox://styles/mussida/cm0whh1la00x001qu6wdsfq4v/draft';

  lat: number = 30.031081352375246;
  lng: number = 31.276183921067783;

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoibXVzc2lkYSIsImEiOiJjbHR4YWFrbjQwM3luMmprbno2YWpjZGJ5In0.VVoh0aDiki2gXL8-iMkmaA',
      container: 'map',
      style: this.style,
      zoom: 16,
      language: 'ar',
      center: [this.lng, this.lat],
    });
  }
}
