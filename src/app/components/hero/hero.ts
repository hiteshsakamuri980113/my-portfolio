import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  scrollToProjects() {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to projects-preview section if #projects doesn't exist
      const projectsPreview = document.querySelector('.projects-preview');
      if (projectsPreview) {
        projectsPreview.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  scrollToContact() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
