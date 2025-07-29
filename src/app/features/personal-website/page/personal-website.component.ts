import { Component, ElementRef, ViewChild } from '@angular/core';
import { SummaryComponent } from "../../summary/summary.component";
import { AboutMeComponent } from "../../about-me/about-me.component";
import { SkillsComponent } from "../../skills/skills.component";
import { WorksComponent } from '../../works/works.component';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from "../../contact-me/contact-me.component";

@Component({
  selector: 'app-personal-website',
  standalone: true,
  imports: [SummaryComponent, AboutMeComponent, SkillsComponent, WorksComponent, CommonModule, ContactMeComponent],
  templateUrl: './personal-website.component.html',
  styleUrl: './personal-website.component.scss'
})
export class PersonalWebsiteComponent {
loadSummary = false;
  loadAbout = false;
  loadSkills = false;
  loadWorks = false;
  loadContact = false;

  @ViewChild('summarySection') summarySection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('worksSection') worksSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  ngAfterViewInit() {
    this.observeSection(this.summarySection, () => (this.loadSummary = true));
    this.observeSection(this.aboutSection, () => (this.loadAbout = true));
    this.observeSection(this.skillsSection, () => (this.loadSkills = true));
    this.observeSection(this.worksSection, () => (this.loadWorks = true));
    this.observeSection(this.contactSection, () => (this.loadContact = true));
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
