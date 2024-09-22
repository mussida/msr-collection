import { Routes } from '@angular/router';
import { StoriesComponent } from '../pages/stories/stories.component';
import { ImagesComponent } from '../pages/images/images.component';
import { HomeComponent } from '../pages/home/home.component';
import { InfoComponent } from '../pages/info/info.component';
import { StoriesAbuMaherComponent } from '../components/stories-abu-maher/stories-abu-maher.component';
import { StoriesRoubaComponent } from '../components/stories-rouba/stories-rouba.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'stories',
    component: StoriesComponent,
  },
  {
    path: 'images',
    component: ImagesComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'stories/abu-maher',
    component: StoriesAbuMaherComponent,
  },
  {
    path: 'stories/rouba',
    component: StoriesRoubaComponent,
  },
];
