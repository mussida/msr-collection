import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-desktop',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar-desktop.component.html',
  styleUrl: './navbar-desktop.component.css',
})
export class NavbarDesktopComponent {
  storiesHovered: boolean = false;
  imagesHovered: boolean = false;
}
