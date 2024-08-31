import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarDesktopComponent } from '../components/navbar-desktop/navbar-desktop.component';
import { MainImageComponent } from '../components/main-image/main-image.component';
import { NavbarMobileComponent } from '../components/navbar-mobile/navbar-mobile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarDesktopComponent,
    MainImageComponent,
    NavbarMobileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'msr-collection';
}
