import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../components/hero/hero';
import { ProjectsPreview } from '../../components/projects-preview/projects-preview';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, ProjectsPreview, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private router: Router) {}

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}
