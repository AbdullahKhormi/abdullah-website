import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from "../../summary/summary.component";
import { AboutMeComponent } from "../../about-me/about-me.component";
import { SkillsComponent } from "../../skills/skills.component";
import { WorksComponent } from '../../works/works.component';
import { ContactMeComponent } from "../../contact-me/contact-me.component";
import { NavigateSectionsService } from '../../../shared/services/header-sections/navigate-sections.service';

@Component({
  selector: 'app-personal-website',
  standalone: true,
  imports: [SummaryComponent, AboutMeComponent, SkillsComponent, WorksComponent, CommonModule, ContactMeComponent],
  templateUrl: './personal-website.component.html',
  styleUrl: './personal-website.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalWebsiteComponent implements OnInit {
  private recieveSection = inject(NavigateSectionsService);
  show = signal(false);

  ngOnInit(): void {
    this.recieveSection.getNavSectionObs().subscribe((res) => {
      const element = document.querySelector(res);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    this.checkScroll();
    window.addEventListener('scroll', this.checkScroll);
  }

  scroll() {
    window.scrollTo(0, 0);
  }

  checkScroll = () => {
    const header = document.querySelector('app-header');
    if (header) {
      const triggerPoint = header.getBoundingClientRect().bottom + window.scrollY;
      const shouldShow = window.scrollY > triggerPoint;
      if (this.show() !== shouldShow) {
        this.show.set(shouldShow);
      }
    }
  };
}
