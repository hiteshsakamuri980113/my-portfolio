import { Component, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMobileMenuOpen = false;

  constructor(private elementRef: ElementRef, private router: Router) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const header = this.elementRef.nativeElement.querySelector('.header');

    if (header) {
      // Progressive opacity based on scroll position
      const maxScroll = 100; // pixels to reach full opacity
      const opacity = Math.min(scrollTop / maxScroll, 1);

      // Apply the background with calculated opacity
      header.style.background = `rgba(253, 249, 238, ${0.85 * opacity})`;

      // Add/remove scrolled class for additional styling
      if (scrollTop > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const header = this.elementRef.nativeElement;

    // Close mobile menu if click is outside header
    if (this.isMobileMenuOpen && !header.contains(target)) {
      this.isMobileMenuOpen = false;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
    this.closeMobileMenu();
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
    this.closeMobileMenu();
  }

  navigateToContact() {
    // Scroll to contact section on current page or navigate to home then scroll
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home page, navigate to home first then scroll
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const contactEl = document.getElementById('contact');
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    }
    this.closeMobileMenu();
  }

  @HostListener('window:resize')
  onWindowResize() {
    // Close mobile menu if window is resized to desktop size
    if (window.innerWidth > 768) {
      this.isMobileMenuOpen = false;
    }
  }
}
