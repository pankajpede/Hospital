import { Component, HostListener, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu: boolean = false;
  showAboutSubmenu: boolean = false;
  showServicesSubmenu: boolean = false;
  showIndustriesSubmenu: boolean = false;
  isScrolled = false;
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollY > 50;
    this.showScrollButton = scrollY > 100; // Show button after 100px scroll
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  showAboutMenu() {
    this.showAboutSubmenu = !this.showAboutSubmenu;
  }

  showServiceMenu() {
    this.showServicesSubmenu = !this.showServicesSubmenu;
  }

  showshowIndustries() {
    this.showIndustriesSubmenu = !this.showIndustriesSubmenu
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}