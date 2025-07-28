import { Component, ElementRef, ViewChild } from '@angular/core';
import { SummaryComponent } from "../../summary/summary.component";
import { AboutMeComponent } from "../../about-me/about-me.component";
import { SkillsComponent } from "../../skills/skills.component";
import { WorksComponent } from '../../works/works.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-website',
  standalone: true,
  imports: [SummaryComponent, AboutMeComponent, SkillsComponent,WorksComponent,CommonModule],
  templateUrl: './personal-website.component.html',
  styleUrl: './personal-website.component.scss'
})
export class PersonalWebsiteComponent {
loadSummary = false;
  loadAbout = false;
  loadSkills = false;
  loadWorks = false;

  @ViewChild('summarySection') summarySection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('worksSection') worksSection!: ElementRef;

  ngAfterViewInit() {
    this.observeSection(this.summarySection, () => (this.loadSummary = true));
    this.observeSection(this.aboutSection, () => (this.loadAbout = true));
    this.observeSection(this.skillsSection, () => (this.loadSkills = true));
    this.observeSection(this.worksSection, () => (this.loadWorks = true));
  }

  observeSection(elementRef: ElementRef, callback: () => void) {
    const observer = new IntersectionObserver((entries, obs) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        callback();
        obs.unobserve(entry.target);
      }
    });
    observer.observe(elementRef.nativeElement);
  }
}
