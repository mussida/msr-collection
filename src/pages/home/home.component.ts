import { Component } from '@angular/core';
import { MainImageComponent } from '../../components/main-image/main-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
